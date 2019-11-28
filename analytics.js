(function analytics() {
    let analytics = {
    contentRankings: {
    path: 'branch/analytics/contents/rankings',
    daysAgo: 7
    },
postsRankings: {
    path: 'branch/analytics/posts/rankings',
    daysAgo: 7
    },
postsTimeseries: {
    path: 'branch/analytics/posts/timeseries',
    daysAgo: 1000
    },
usersTimeseries: {
    path: 'branch/analytics/users/timeseries',
    daysAgo: 1000
    },
    chatsTimeseries: {
    path: 'branch/analytics/chats/timeseries',
    daysAgo: 1000
    }
},
links = "";
for (element in analytics) {
    let since = we.util.date.daysAgo(analytics[element].daysAgo).toISOString();
    links += "<a href='"
    + we.system.baseURL
    + "/" + we.api._apiPath
    + analytics[element].path
    + ";wesessid=" + we.authMgr.getSessionID()
    + "?since=" + since
    + "&format=csv"
    + "'>" + element + "</a><br>";
}
new we.ui.widget.Dialog({
    headline: 'Here are the links',
    content: links
    });
}());
