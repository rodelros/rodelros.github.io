
//	dependencies:
//		js/enums.js
//		js/date_extension.js

(function(){

	const template = document.createElement('template');
	template.innerHTML = `
		<div class="month">
			<header></header>
			<table>
				<tr> <th>Su</th> <th>Mo</th> <th>Tu</th> <th>We</th> <th>Th</th> <th>Fr</th> <th>Sa</th> </tr>
				<tr> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> </tr>
				<tr> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> </tr>
				<tr> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> </tr>
				<tr> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> </tr>
				<tr> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> </tr>
				<tr> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> </tr>
			</table>
		</div>`;

	class Calendar extends HTMLElement{
	
		constructor(){
			super();
		}
		
		connectedCallback(){
			this.appendChild(template.content.cloneNode(true));
			this._initState();
			this._render();
		}
		
		disconnectedCallback(){
			this._removeEventListeners();
		}
		
		//----- private methods -----
		
		_initState(){
			
			this._initCssStyle();
			
			let today = new Date();
			this._state = {
				currentDate: today.getDate()
				,selectedStartDateEl: null
				,selectedEndDateEl: null
				,currentDateEl: null
				,selectedStartDate: null // used to initialize the selected start date
				,selectedEndDate: null // used to initialize the selected end date
				,month: today.getMonth()
				,year: today.getFullYear()
			};
		}
		
		_initCssStyle(){
			
			if(this._state){
				if(this._state.selectedStartDateEl){
					this._state.selectedStartDateEl.classList.remove('selected-start-date');
				}
				
				if(this._state.selectedEndDateEl){
					this._state.selectedEndDateEl.classList.remove('selected-end-date');
				}

				if(this._state.currentDateEl){
					this._state.currentDateEl.classList.remove('current-date');
				}
			}
		}
		
		_renderWeek(rowEl, dayOfMonth, lastDateOfMonth, dayOfWeek){
			
			while(dayOfWeek <= DAYS.SAT && lastDateOfMonth >= dayOfMonth){
				
				let dte = new Date(this._state.year, this._state.month, dayOfMonth, 0, 0, 0, 0);
				let el = rowEl.children[dayOfWeek];
				el.innerText = dayOfMonth;
				el.data = {date:dte};
				el.classList.add('available-cell');
				
				if(this._state.selectedStartDate && this._state.selectedStartDate === dayOfMonth){
					this._selectStartDateEl(el);
				}
				
				if(this._state.selectedEndDate && this._state.selectedEndDate === dayOfMonth){
					this._selectEndDateEl(el);
				}
				
				if(this._state.currentDate && this._state.currentDate === dayOfMonth){
					this._selectCurrentDateEl(el);
				}
				
				dayOfMonth++;
				dayOfWeek++;
			}
			
			return dayOfMonth;
		}
		
		_render(){
			this._removeEventListeners();
			this._renderMonth();
			this._addEventListeners();
		}
		
		_renderMonth(){
			
			let dte = new Date(this._state.year, this._state.month, 1);
			let dayOfWeek = dte.getDay();
			let dayOfMonth = 1; // start of the month
			let lastDateOfMonth = dte.getDaysCount();
			
			let tbl = this.querySelector('table');
			let tableRows = tbl.children[0].children;
			let firstWeekRow = 1; // row 0 is the header showing the days of the week
			let rowCount = 6;
			
			this._clearUnavailableDays(dayOfWeek, lastDateOfMonth, tableRows, firstWeekRow);
			
			let weekRow;
			for(weekRow = 0; weekRow <= rowCount && dayOfMonth <= lastDateOfMonth; weekRow++){
				dayOfMonth = this._renderWeek(tableRows[firstWeekRow + weekRow], dayOfMonth, lastDateOfMonth, dayOfWeek);
				dayOfWeek = DAYS.SUN;
			}			
		}
		
		_clearUnavailableDays(dayOfWeek, lastDateOfMonth, tableRows, firstWeekRow){
			
			let clearCell = cell => {
				cell.data = null;
				cell.innerText = '';
				cell.classList.remove('available-cell');				
			};
			
			// clear the days that are before the start of the month
			if(dayOfWeek > DAYS.SUN){
				
				let firstRow = tableRows[firstWeekRow];
				let day = DAYS.SUN;
				let dayEl;
				
				while(day < dayOfWeek){
					clearCell(firstRow.children[day]);
					day++;
				}
			}

			// clear the days that are after the last day of the month
			let cellCount = 7 * 6; // days in a week * number of rows in the calendar
			let lastValidCell = dayOfWeek + lastDateOfMonth;
			let invalidCellCount = cellCount - lastValidCell;
			let row = 6; // last row in the calendar
			let day = DAYS.SAT;
			
			while(invalidCellCount > 0){
				clearCell(tableRows[row].children[day]);
				day = day === DAYS.SUN ? DAYS.MON : day-1;
				invalidCellCount--;
			}
		}
		
		_addEventListeners(){
			this._boundOnClick = this._onClick.bind(this);
			let td = this.querySelectorAll('td');
			td.forEach((el,i) => {
				if(el.data && el.data.date){
					el.addEventListener('click', this._boundOnClick);
				}
			});
		}
		
		_selectCurrentDateEl(dateEl){
			let CURRENT_DATE = 'current-date';
			
			if(this._state.currentDateEl){
				this._state.currentDateEl.classList.remove(CURRENT_DATE);
			}
			
			dateEl.classList.add(CURRENT_DATE);
			this._state.currentDateEl = dateEl;
		}
		
		_selectDateEl(dateEl){
			
			if(this._state.selectedStartDateEl === null){
				
				this._selectStartDateEl(dateEl);
				
			} else if(this._state.selectedEndDateEl === null){
				
				let startDate = this._state.selectedStartDateEl.data.date;
				if(startDate > dateEl.data.date){
					this._selectStartDateEl(dateEl);
				} else {
					this._selectEndDateEl(dateEl);
				}
				
			} else {
				
				this._selectStartDateEl(dateEl);
				this._selectEndDateEl(null);	
			}
			
		}
		
		_selectStartDateEl(dateEl){
			let SELECTED = 'selected-start-date';
			
			if(this._state.selectedStartDateEl){
				this._state.selectedStartDateEl.classList.remove(SELECTED);
			}
			
			dateEl.classList.add(SELECTED);
			this._state.selectedStartDateEl = dateEl;
		}
		
		_selectEndDateEl(dateEl){
			let SELECTED = 'selected-end-date';
			
			if(this._state.selectedEndDateEl){
				this._state.selectedEndDateEl.classList.remove(SELECTED);
				this._state.selectedEndDateEl = null;
			}
			
			if(dateEl){	
				dateEl.classList.add(SELECTED);
				this._state.selectedEndDateEl = dateEl;
			}
		}
		
		_onClick(evt){
			this._selectDateEl(evt.target);
		}
		
		_removeEventListeners(){
			
			let td = this.querySelectorAll('td');
			td.forEach((el,i) => {
				
				if(el.data && el.data.date){
					el.removeEventListener('click', this._boundOnClick);
				}
			});
		}
		
		//----- public methods
		
		// param: {year, month, selectedStartDate, selectedEndDate, currentDate}
		init(param){
			
			this._initState();
			let year = param.year;
			let month = param.month;
			let selectedStartDate = param.selectedStartDate;
			let selectedEndDate = param.selectedEndDate;
			let currentDate = param.currentDate;
			
			if(year && month){
				let dte = new Date(year, month, 1, 0, 0, 0, 0);
				let lastDateOfMonth = dte.getDaysCount();
				if(selectedStartDate && selectedStartDate > 0 && selectedStartDate <= lastDateOfMonth){
					this._state.selectedStartDate = selectedStartDate;
				}
				
				if(selectedEndDate && selectedEndDate > 0 && selectedEndDate <= lastDateOfMonth && selectedEndDate > selectedStartDate){
					this._state.selectedEndDate = selectedEndDate;
				}
				
				if(currentDate && currentDate > 0 && currentDate <= lastDateOfMonth){
					this._state.currentDate = currentDate;
				}
				
				this._state.year = year;
				this._state.month = month;
				
				this._render();				
			}
		}
		
		//----- getters and setters
		
		get selectedStartDate(){
			return this._state.selectedStartDateEl.data.date;
		}
		
		get selectedEndDate(){
			return this._state.selectedEndDateEl.data.date;
		}
		
	}
	
	window.customElements.define('calendar-component', Calendar);
})();