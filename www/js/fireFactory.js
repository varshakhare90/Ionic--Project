/**
    @desc: factory for fetching the user list data from the firebase
**/

userListApp.factory("firefactory", function($firebaseArray){
    var fb = new Firebase("https://userlistapp.firebaseio.com/");
    var userListFb = $firebaseArray(fb);
    var userListData = {
        all:  userListFb,
        receive: function (usrid) {
            return userListFb.$getRecord(usrid);

        }
    }
    return userListData;
})
