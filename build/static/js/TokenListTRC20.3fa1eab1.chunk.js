(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1420:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAolBMVEUAAAD9/f3///////////////////////////////////////////////////////////////////////////////////////////////////////////////+1tbW9vb35+fn29vbz8/Pu7u7U1NTw8PDj4+PQ0NDCwsK/v7/IyMjX19fn5+fd3d3Gxsa6urrh4eHZ2dnKysrExMTp6enMzMwjnaLvAAAAHXRSTlMA/QjdudlbT0oQzu7mtYxy4JchHBflm4tx8bTLntSLMkcAAAH3SURBVEjHxZbZeoIwEEYbC2LdcN/aMSAgICri8v6v1khiGCSCeuN/443nOzMTsnx9Kj9GV9NbhLR0rWv8VP+/Vu8QQCFavVYOmGMoZGyWQI1vUOa78UjRh4fpK0WjXyhJc1QkBllR6uIG98SwBxXpDe/6aEJlmvl+JvBEJrnpwlNpoLLuWveiwHVUI8hKmwGKtd4sr9kfrAIzk5IxErh0eQvFKg9Y2jdNHQtksMranQK4pi4QjQOOFODEruP49LTjVWpifxCOxMsHob4skPD9Y4BAAiWwX+MxGCkyBR668iJRWnECXsJ/uymykMj9ADZCYK331Ic0nRTRJSLWMeSCyJNzD3Y28OgpMs8QHsJUUnBgArQ8rRQBhIhY1OZz95mAs2KspAxhgpMUrNwTRuZFxKa26EAUSo9nXJiusgSZIAqDhLG4/YUCiZNMcOECPOSuqjCLj1cKyBkvpaFEmGDPBLI40b6R+yypjZAt6n7Lut8S+Vmijz/2vayXWAqSMIykX8tvMedCb5vXoo4QHKUgt8Vq7Vs9u4C6Dl+XtAMsEBu5eFw4/lVFqCU7wDGLh5LY5/QS+2GY2MpDCR99WBUet6qj7+UD9u+NY/z1y+LdKwln1Cy/+N69Xt+/xLHIbBeBtlmreJBoigdJ9bNn2uHPns6UPXs+lH/GLsFEEcCdEQAAAABJRU5ErkJggg=="},1421:function(e,t,a){"use strict";a.d(t,"a",function(){return b});var n=a(1428),r=a.n(n),o=a(79),l=a(2),s=a.n(l),c=a(8),i=a(6),d=a(16),u=a(15),p=a(21),m=a(20),g=a(0),h=a.n(g),f=a(18),b=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).loadDatas=Object(i.a)(s.a.mark(function e(){var t,a,r,o,l=arguments;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=0<l.length&&void 0!==l[0]?l[0]:1,a=1<l.length&&void 0!==l[1]?l[1]:40,r=n.state.filter,e.next=5,f.b.getTokens(Object(c.a)({sort:"rank",limit:a,start:(t-1)*a},r));case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}},e)})),n.handleTableChange=function(e,t,a){var r=Object(c.a)({},n.state.pagination);r.current=e.current,n.setState({pagination:r}),n.fetch(Object(c.a)({pageSize:e.pageSize,page:e.current,sortField:a.field,sortOrder:a.order},t))},n.fetch=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};n.setState({loading:!0}),n.props.onPageChange&&n.props.onPageChange(e.page,e.pageSize),n.setState({loading:!1})},n.onInputChange=function(e){n.setState({searchText:e.target.value})},n.onReset=function(){n.setState({searchText:""},function(){n.onSearch()})},n.onSearch=function(){var e=n.props,t=e.tableData,a=(e.filterDropdownVisible,n.state.searchText),r=new RegExp(a,"gi");n.setState({filterDropdownVisible:!1,filtered:!!a,data:t.map(function(e){return e.name.match(r)?Object(c.a)({},e,{name:h.a.createElement("span",null," ",e.name.split(new RegExp("(?<=".concat(a,")|(?=").concat(a,")"),"i")).map(function(e,t){return e.toLowerCase()===a.toLowerCase()?h.a.createElement("span",{key:t,className:"highlight"}," ",e," "):e})," ")}):null}).filter(function(e){return!!e})})},n.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var a,n={},r=[],l=Object(o.a)(e);try{for(l.s();!(a=l.n()).done;){var s=a.value;if(s.sorter&&!s.filterDropdown){var i={sorter:t(s.key)};r.push(Object(c.a)({},s,{},i))}else if(!s.sorter&&s.filterDropdown){var d=Object(c.a)({},n);r.push(Object(c.a)({},s,{},d))}else if(s.sorter&&s.filterDropdown){var u=Object(c.a)({sorter:t(s.key)},n);r.push(Object(c.a)({},s,{},u))}else r.push(s)}}catch(e){l.e(e)}finally{l.f()}return r},n.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,a=this.state.pagination;e.current!=t&&this.setState({pagination:Object(c.a)({},a,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,o=e.column,l=e.bordered,s=e.pagination,i=void 0===s||s,d=e.scroll,u=e.Footer,p=e.locale,m=e.addr,g=e.transfers,f=e.nopadding,b=(e.contractAddress,e.isPaddingTop,this.setColumn(o)),v=i?Object(c.a)({total:t},this.state.pagination):i;return h.a.createElement("div",null," ",m?h.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==g?" transfer-mt-100":" transfer-pt-100")+(f?" transfer-mp-0":"")},h.a.createElement(r.a,{bordered:l,columns:b,rowKey:function(e,t){return t},dataSource:n,locale:p,scroll:d,footer:u,pagination:v,loading:a,onChange:this.handleTableChange})," "):h.a.createElement("div",{className:"card table_pos"},h.a.createElement(r.a,{bordered:l,columns:b,footer:u,rowKey:function(e,t){return t},dataSource:n,locale:p,scroll:d,pagination:v,loading:a,onChange:this.handleTableChange})," ")," ")}}]),a}(g.Component)},3466:function(e,t,a){"use strict";a.r(t);var n=a(1356),r=a.n(n),o=a(264),l=a.n(o),s=a(37),c=a.n(s),i=a(2),d=a.n(i),u=a(6),p=a(16),m=a(15),g=a(21),h=a(20),f=a(0),b=a.n(f),v=a(28),E=a(381),_=a(13),w=(a(50),a(3)),x=a(23),y=a(387),k=(a(86),a(1421)),A=a(4),C=a(19),j=a(51),O=a(90),S=a(63),D=a(12),M=a.n(D),N=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(e){var o;Object(p.a)(this,n),(o=t.call(this,e)).loadPage=Object(u.a)(d.a.mark(function e(){var t,a,n,r,l,s,c=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=0<c.length&&void 0!==c[0]?c[0]:1,a=1<c.length&&void 0!==c[1]?c[1]:20,n=o.state.filter,o.props.intl,o.setState({loading:!0}),n.name)return e.next=8,M.a.get(A.f+"/api/token_trc20?sort=issue_time&limit="+a+"&start="+(t-1)*a+"&name="+n.name);e.next=12;break;case 8:r=e.sent,l=r.data.trc20_tokens.length,e.next=16;break;case 12:return e.next=14,M.a.get(A.f+"/api/token_trc20?sort=issue_time&limit="+a+"&start="+(t-1)*a);case 14:r=e.sent,l=r.data.total;case 16:return(s=r.data.trc20_tokens).map(function(e,n){e.index=n+1+(t-1)*a}),o.setState({loading:!1,tokens:s,total:l,page:t}),o.addIEOClass(),e.abrupt("return",l);case 21:case"end":return e.stop()}},e)})),o.setSearch=function(){var e=c()(Object(y.a)(o.props.location,"search"));0<e.length?o.setState({filter:{name:"%25".concat(e,"%25")}}):o.setState({filter:{}})},o.addIEOClass=function(){var e=o.state.page,t=document.querySelector(".ant-table-tbody").firstElementChild;1==e?t.classList.add("trc20-star-ad"):t.classList.remove("trc20-star-ad"),document.querySelector(".trc20-star-ad")&&document.querySelector(".trc20-star-ad").addEventListener("click",function(){window.open("http://www.tronace.com")})},o.onChange=function(e,t){o.loadPage(e,t)},o.customizedColumn=function(){var e=o.props.intl,t=o.state.contractAddress,n=a(1420);return[{title:"#",dataIndex:"index",key:"index",width:"48px",align:"center",className:"ant_table _text_nowrap",render:function(e,a){return b.a.createElement("span",null,a.contract_address==t?b.a.createElement("div",null,b.a.createElement("span",{className:"starbeat"},b.a.createElement("i",{className:"fas fa-star"})," "),b.a.createElement("span",{className:"star-tip"})):b.a.createElement("span",null,e-1))}},{title:l()(e.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"50%",render:function(e,t){return b.a.createElement("div",{className:"table-imgtext"},t.icon_url?b.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},b.a.createElement("img",{style:{width:"42px",height:"42px"},src:t.icon_url,onError:function(e){e.target.onerror=null,e.target.src=n}})):b.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},b.a.createElement("img",{style:{width:"42px",height:"42px"},src:n})),b.a.createElement("div",null,b.a.createElement("h5",null,b.a.createElement(x.g,{name:t.name,namePlus:t.name+" ("+t.symbol+")",address:t.contract_address})),b.a.createElement("p",null,t.token_desc)))}},{title:e.formatMessage({id:"market_capitalization"}),align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap",render:function(e,t){return b.a.createElement("div",null,t.price&&t.total_supply_with_decimals?b.a.createElement("div",null,b.a.createElement(_.c,{value:t.total_supply_with_decimals*t.price,maximumFractionDigits:1})," ","TRX"):b.a.createElement("span",{style:{color:"#666666"}},"-"))}},{title:e.formatMessage({id:"pice_per_onetrx"}),dataIndex:"pice_per_onetrx",key:"pice_per_onetrx",align:"center",className:"ant_table",render:function(e,t){return r()(e),b.a.createElement("div",null,t.price?b.a.createElement("div",null,b.a.createElement(_.c,{value:t.price,maximumFractionDigits:1})," ","TRX"):b.a.createElement("span",{style:{color:"#666666"}},"-"))}},{title:e.formatMessage({id:"total_tokens"}),dataIndex:"total_supply_with_decimals",key:"total_supply",render:function(e,t){return null===e&&(e=0),b.a.createElement("div",null,b.a.createElement(_.c,{value:t.total_supply_with_decimals/Math.pow(10,t.decimals),maximumFractionDigits:1}))},align:"center",className:"ant_table _text_nowrap"},{title:e.formatMessage({id:"contract_address"}),dataIndex:"contract_address",key:"contract_address",render:function(e,t){return b.a.createElement(x.a,{address:t.contract_address,isContract:!0})},align:"center",className:"ant_table"}]},o.state={tokens:[],buyAmount:0,loading:!1,total:0,filter:{},page:1,contractAddress:"TB2SqC48afC9FX36bPQQHatoKo5m79JXKL"};var s=c()(Object(y.a)(e.location,"search"));return 0<s.length&&(o.state.filter.name="%25".concat(s,"%25")),o}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.loadPage(),setTimeout(function(){e.addIEOClass()},1e3)}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,a=t.tokens,n=(t.alert,t.loading),r=t.total,o=t.contractAddress,l=this.props,s=(l.match,l.intl),c=this.customizedColumn(),i=s.formatMessage({id:"part_total"})+" "+r+" "+s.formatMessage({id:"part_pass"});return b.a.createElement("main",{className:"container header-overlap token_black trc20-ad-bg"},n&&b.a.createElement("div",{className:"loading-style"},b.a.createElement(O.b,null)),b.a.createElement("div",{className:"row"},b.a.createElement("div",{className:"col-md-12 table_pos"},r?b.a.createElement("div",{className:"table_pos_info d-none d-md-block d-flex",style:{left:"auto"}},i," \xa0\xa0",b.a.createElement(S.a,{to:"/exchange/trc20"},Object(w.b)("Trade_on_Poloni DEX"),">")):"",b.a.createElement("a",{className:"apply-trc20",href:"https://goo.gl/forms/PiyLiDeaXv3uesSE3",target:"_blank",style:{color:"#C23631"}},b.a.createElement("button",{className:"btn btn-danger"},Object(w.c)("application_entry"))),b.a.createElement(k.a,{bordered:!0,loading:n,column:c,data:a,total:r,contractAddress:o,onPageChange:function(t,a){e.loadPage(t,a)}}))))}}]),n}(f.Component),L={loadTokens:E.b,login:C.v,reloadWallet:j.c};t.default=Object(v.connect)(function(e){return{account:e.app.account,tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current}},L)(Object(_.h)(N))}}]);