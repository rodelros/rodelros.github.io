using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Domain.Enums
{

    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum VClub
    { 
         None
        ,IndividualMonthly
        ,DuoMonthly
        ,FriendsFamilyMonthly
        ,IndividualAnnual
        ,DuoAnnual
        ,FriendsFamilyAnnual
    }

    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum VPass
    { 
         None
        ,OneWayDomestic
        ,RoundTripDomestic
    }

    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum SubscriptionStatus
    { 
         Inactive
        ,Active
    }

}
