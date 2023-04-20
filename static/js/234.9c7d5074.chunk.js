"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[234],{530:function(t,e,a){a.r(e),a.d(e,{default:function(){return k}});var n=a(439),s=a(791),o=a(87),r=a(433),i=a(243),c={get:function(t){return i.Z.get(t)},put:function(t,e){return i.Z.put(t,e)}},l="https://643a731890cd4ba563f9a53b.mockapi.io/api/v1/";var u="https://643a731890cd4ba563f9a53b.mockapi.io/api/v1/";var f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAsCAYAAACZmXFCAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASFSURBVHgB7ZzBSxtBFMZfiilEUKEW2oIe9KCghXrQg6dCz/2be+ihHtqLUAuNoAc9RGgK5hChEez7zFu7JvNmZ3dmjNT3g0GdzD42u59vvn0zSevm5uYjGQVHrVbrlCLg67nCP3bIuOUZGWW2WSCLZCTDBDbNHotsnowkmMCm6XDbJSMJJjA3i5zFtsiIxgSms84iWyMjChOYH5j+ZTIaYwKrZsdMf3NMYNXcmn4W2RwZtTGBhYHa2AYZtTGBhWOmvwEmsHqY6a9JLl8x4nbObSi/X9HYy7S5LXF7wa2pcUa8Abee/H4t/Yj/kttCROwQYPoPeM1ySA/PEY3fexlc093AsXWBNdimCFILrM+tyxe/XzVQMgF8TWhGgJiwEH3C8a+VMacSe0Vi5xBaYfq/eM4jF4PJa8vn0QkdWxeOTbGkFFitnQjy5g/E10AMbc/wM4kfdEN5HLLnOcfeoDzmvDD9P8jwksqDHTbd5iLHHXmGICMeNskWfEwXx1MezPQHkEJgEMAZNUSKmJvKyxciksZkFpmZ/gpip8iBTwCytwoN0x9M8W8ePyq9jv59GvuaSTD+uyd2W2LjPVz7/AbOUYSQQwyzNP0+VhXxT3lYuZaubKz5u2BiBeac2uSE33F77XitWxIlxmhv4pzHXSnxX9F412i71IexZx7Bo3+f0jNL0+9jRemHP508T+ggSyE5RmBDT9ZwikvY4JuxSuMygzYGOKddEdee46WOxJ7j85oy3zhXfg1ZJseTpZl+hRiB9VydUiIoCwc31ZWJcFP6E38XGamvZS/mLfmB+b5QxH9B7qkgBeuSRUdk3BEjME0Ak1npOOQhgG8Ost6qLzaPQewQX4A4LoFdUl5QlDwn446Yp0jN1KaYgrTYoR/I0Mz8Q3gky2AlHusWFO28Qm/en8jjm4IHicf2NDlTYjLYc6U/xTSkZcHQtTVt+o5+7PZwEluz+x+JEdiC0j/pQTqox5RayDTnnOLEuIdkiJ7Sv0R5GLqeXI04ga26OkUE5WUjPL7vl1rI6nzbUyE/JD8nshbpwlcWaQoEf0CGkxiBqSLgG4wCrMuPwANp2WWSFSU2BPxZid3VMomUT3JMkd88JZUnT6zJR3Zy/vcWa4AlEY64r87+JCx1nLqOkb5PEhu1M4jrsqKSvknp6dZ8T0+O2MXuZdkSo4KMI63JjdjxfdhC4vbkpyouOcfU2ctMfQApdlNsVImsCln+cfkjPBDsxXyiJ9OeMDP1gaTaDwaRbdUVAhbFucH0Y21R23CIafB93c8mlmInFxeZqQ8mZaF1ndsbvqk/abwtRy0niHdC1sKTaDsgNqa3D3wclpyOK2IXW0/WAmPXZZamfl7WO8vUnfo7jq3Q2eqDrYxfQAfPNaR/xVFkIAi6MOaxsX/RuKA6kni4SEuUZ89XQbfKd9kX0N0n51JRsdkwR+2piP2QmKlvgH0uMgwz9Q0xgVVjpj4CE1g1VqmPwATm58gq9XGYwHROYr/S3DCBaQzM1KfBBDYNTP1XMpJgApvGTH1CTGD3MVOfmL8NaLjcbuMKoAAAAABJRU5ErkJggg==",g=a.p+"static/media/picture.7009908930a9bac45a3e.png",d={followButton:"FollowButton_followButton__snK3K"},m=a(184);function A(t){var e=t.id,a=t.followers,o=t.onFollowersChange,r=(0,s.useState)(!1),i=(0,n.Z)(r,2),c=i[0],l=i[1],u=(0,s.useState)(a),f=(0,n.Z)(u,2),g=f[0],A=f[1];(0,s.useEffect)((function(){var t=localStorage.getItem("following-".concat(e)),a=localStorage.getItem("followersCount-".concat(e));null!==t&&null!==a&&(l(JSON.parse(t)),A(JSON.parse(a)))}),[e]);return(0,m.jsx)("button",{type:"button",className:d.followButton,onClick:function(){return function(t){var e=c?g-1:g+1;localStorage.setItem("following-".concat(t),!c),localStorage.setItem("followersCount-".concat(t),e),l(!c),A(e),o(e)}(e)},style:{backgroundColor:c?"var(--accent-color)":"var(--secondary-color)"},children:c?"Following":"Follow"})}var w={item:"UserListItem_item__WgKxR",logo:"UserListItem_logo__fE6dN",picture:"UserListItem_picture__sHGRE",divider:"UserListItem_divider__tp7NX",avatar:"UserListItem_avatar__m5GSc",stripe:"UserListItem_stripe__3kVKf",text:"UserListItem_text__OirAE"};function v(t){var e=t.id,a=t.name,o=t.tweets,r=t.followers,i=t.avatar,c=(0,s.useState)(r),l=(0,n.Z)(c,2),u=l[0],d=l[1];return(0,m.jsxs)("li",{className:w.item,children:[(0,m.jsx)("img",{className:w.logo,src:f,alt:"logo"}),(0,m.jsx)("img",{className:w.picture,src:g,alt:"abstract figures"}),(0,m.jsxs)("div",{className:w.divider,children:[(0,m.jsx)("div",{className:w.stripe}),(0,m.jsx)("img",{className:w.avatar,src:i,alt:a})]}),(0,m.jsxs)("div",{className:w.text,children:[(0,m.jsx)("span",{style:{fontWeight:700,color:"var(--accent-color)"},children:a}),(0,m.jsx)("span",{children:1===o?o+" tweet":o.toLocaleString()+" tweets"}),(0,m.jsx)("span",{children:1===u?u+" follower":u.toLocaleString()+" followers"})]}),(0,m.jsx)(A,{id:e,followers:u,onFollowersChange:function(t){d(t)}})]})}var x={list:"UserList_list__2FpoQ"};function p(t){var e=t.page,a=t.handleUsers,o=(0,s.useState)([]),i=(0,n.Z)(o,2),f=i[0],g=i[1],d=(0,s.useState)(0),A=(0,n.Z)(d,2),w=A[0],p=A[1],S=(0,s.useState)(!1),j=(0,n.Z)(S,2),h=j[0],Z=j[1];return(0,s.useEffect)((function(){Z(!0),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return c.get("".concat(l,"users?p=").concat(t,"&l=").concat(e))}(e).then((function(t){g((function(a){return 1===e?t.data:[].concat((0,r.Z)(a),(0,r.Z)(t.data))}))})).catch((function(t){return t.message})).finally((function(){return Z(!1)}))}),[e]),(0,s.useEffect)((function(){c.get("".concat(u,"users")).then((function(t){p((function(e){return t.data.length}))})).catch((function(t){return t.message}))}),[]),(0,s.useEffect)((function(){a({users:f,total:w,loading:h,page:e})}),[f,w,h,e,a]),(0,m.jsx)("ul",{className:x.list,children:f.map((function(t){var e=t.id,a=t.user,n=t.tweets,s=t.followers,o=t.avatar;return(0,m.jsx)(v,{id:e,name:a,tweets:n,followers:s,avatar:o},e)}))})}var S=a(708),j={button:"LoadMoreButton_button__Rxyb+"};function h(t){var e=t.page,a=t.onLoadMore,o=(0,s.useState)(0),r=(0,n.Z)(o,2),i=r[0],c=r[1];return(0,s.useEffect)((function(){c(e)}),[e]),(0,m.jsx)("button",{type:"button",className:j.button,onClick:function(){c((function(t){return t+1})),a(i)},children:"Load more"})}var Z={tweets:"TweetsView_tweets__L94rP",link:"TweetsView_link__w61XS"};function k(){var t=(0,s.useState)([]),e=(0,n.Z)(t,2),a=e[0],r=e[1],i=(0,s.useState)(0),c=(0,n.Z)(i,2),l=c[0],u=c[1],f=(0,s.useState)(!1),g=(0,n.Z)(f,2),d=g[0],A=g[1],w=(0,s.useState)(1),v=(0,n.Z)(w,2),x=v[0],j=v[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.rU,{to:"/",className:Z.link,children:"Back"}),(0,m.jsxs)("div",{className:Z.tweets,children:[(0,m.jsx)(p,{page:x,handleUsers:function(t){var e=t.users,a=t.total,n=t.loading,s=t.page;r(e),u(a),A(n),j(s)}}),d&&(0,m.jsx)(S.Z,{}),a.length>0&&a.length<l&&(0,m.jsx)(h,{page:x,onLoadMore:function(){j((function(t){return t+1}))}})]})]})}}}]);
//# sourceMappingURL=234.9c7d5074.chunk.js.map