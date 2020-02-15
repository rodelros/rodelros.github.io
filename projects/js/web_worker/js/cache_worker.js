var _data = {count:0};
onmessage = (e) => {
    console.log('cache_worker received a message.');
    _data.count++;
    postMessage(_data);
};