(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{3455:function(e,a,t){"use strict";t.r(a);var c=t(2),s=t.n(c),l=t(1381),r=t.n(l),n=t(80),m=t.n(n),i=t(5),o=t(15),d=t(14),u=t(20),v=t(19),h=t(139),E=t(21),p=t(0),N=t.n(p),b=t(9),f=t.n(b),y=t(3),g=t(16),w=t(4),S=t(29),_=t(10),k=t(69),O=t(63),x=t(278),j=t(132),T=t.n(j),z=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(u.a)(this,Object(v.a)(a).call(this))).getScrollsIds=function(){var a=e.state.tabs,t=[];a.forEach(function(e,a){var c=T()("#"+e.id);c&&t.push({key:e.id,offsetTop:c.offset().top})});var c=Object(h.a)(e);window.onscroll=function(){c.onScrollEvent(t)}},e.updateHash=function(a){window.location.hash="#/data/stats",e.setState({scrollsId:a})},e.scrollToAnchor=function(e){if(e||0===e){var a=document.getElementById(e);a&&a.scrollIntoView({block:"center",behavior:"smooth"})}},e.state={accounts:null,transactionStats:null,blockStats:null,transactionValueStats:null,txOverviewStats:null,addressesStats:null,blockSizeStats:null,blockchainSizeStats:null,priceStats:null,volume:null,pieChart:null,supplyTypesChart:null,tabs:[{name:"charts_transaction",id:"transfer"},{name:"charts_circulation",id:"currency"},{name:"contract_code_overview_account",id:"address"},{name:"charts_block",id:"block"},{name:"charts_contract",id:"contract"},{name:"charts_SR",id:"sr"},{name:"chart_network",id:"network"}],scrollsId:"",linkIds:[]},e}var c,l,n;return Object(E.a)(a,e),Object(d.a)(a,[{key:"loadAccounts",value:(n=Object(i.a)(s.a.mark(function e(){var a,t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.b.getAccounts({limit:35,sort:"-balance"});case 2:a=e.sent,t=a.accounts,this.setState({accounts:m()(t,function(e){return!r()(k.f,e.address)}).slice(0,10).map(function(e){return{name:e.address,value:e.balance/w.K}})});case 5:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)})},{key:"loadStats",value:(l=Object(i.a)(s.a.mark(function e(){var a,t,c,l,r,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.intl,e.next=3,g.b.getTransferStats({groupby:"timestamp",interval:"hour"});case 3:return a=e.sent,t=a.stats,e.next=7,g.b.getBlockStats({info:"avg-block-size"});case 7:c=e.sent,l=c.stats,r=t.total.map(function(e){return{timestamp:e.timestamp,value:e.value}}),n=t.value.map(function(e){return{timestamp:e.timestamp,value:e.value/w.K}}),l=l.map(function(e){return{timestamp:e.timestamp,value:e.value}}),this.setState({transactionStats:r,transactionValueStats:n,blockStats:l});case 13:case"end":return e.stop()}},e,this)})),function(){return l.apply(this,arguments)})},{key:"loadTxOverviewStats",value:(c=Object(i.a)(s.a.mark(function e(){var a,t,c,l,r,n,m,i,o,d,u,v,h,E,p,N,b,y,S,_,k,O,x,j,T,z,C,B,A,D,I,R,H,M,V,F;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.intl,t=new Date,c=t.getTime(),l=new Date("2017/10/10"),r=l.getTime(),n=Math.floor((c-r)/1e3/3600/24),e.next=8,f.a.get("https://min-api.cryptocompare.com/data/histoday?fsym=TRX&tsym=USD&limit="+n);case 8:return m=e.sent,i=m.data,o=i.Data,e.next=13,f.a.get("https://server.tron.network/api/v2/node/market_data");case 13:return d=e.sent,u=d.data.market_cap_by_available_supply,v=u.map(function(e,t){return{time:e[0],volume_billion:e[1]/Math.pow(10,9),volume_usd:a.formatNumber(e[1])+" USD"}}),e.next=18,g.b.getStatisticData();case 18:return h=e.sent,E=h.statisticData,p=[],0<E.length&&E.map(function(e,t){p.push({key:t+1,name:e.name?e.name:e.url,volumeValue:a.formatNumber(e.blockProduced),volumePercentage:a.formatNumber(100*e.percentage,{maximumFractionDigits:2,minimumFractionDigits:2})+"%"})}),N=Math.random(),e.next=25,f.a.get("https://server.tron.network/api/v2/node/balance_info?random="+N);case 25:return b=e.sent,y=b.data.total,e.next=29,g.b.getBlocks({limit:1,sort:"-number"});case 29:return S=e.sent,_=S.blocks,k=_[0]?_[0].number:0,O=16*k,x=32*k,e.next=36,g.b.getAddress("TLsV52sRDL79HXGGm9yzwKibb6BeruhUzy");case 36:return j=e.sent,T=Math.abs(-9223372036854.775),z=(T-Math.abs(j.balance/w.K)).toFixed(2),C=(1e11+x+O-1e9-z-y).toFixed(2),B=[{value:y,name:"foundation_freeze",selected:!0},{value:C,name:"circulating_supply",selected:!0}],e.next=46,g.b.getTxOverviewStatsAll();case 46:for(V in A=e.sent,D=A.txOverviewStats,I=[],R=[],H=[],M=[],D)0===(F=parseInt(V))?(I.push(D[F]),R.push({date:D[F].date,total:D[F].newAddressSeen,increment:D[F].newAddressSeen})):(I.push({date:D[F].date,totalTransaction:D[F].totalTransaction-D[F-1].totalTransaction,avgBlockTime:D[F].avgBlockTime,avgBlockSize:D[F].avgBlockSize,totalBlockCount:D[F].totalBlockCount-D[F-1].totalBlockCount,newAddressSeen:D[F].newAddressSeen}),R.push({date:D[F].date,total:D[F].newAddressSeen+R[F-1].total,increment:D[F].newAddressSeen})),H.push({date:D[F].date,avgBlockSize:D[F].avgBlockSize}),M.push({date:D[F].date,blockchainSize:D[F].blockchainSize});this.setState({txOverviewStats:I,addressesStats:R,blockSizeStats:H,blockchainSizeStats:M,priceStats:o,volume:v,pieChart:p,supplyTypesChart:B});case 54:case"end":return e.stop()}},e,this)})),function(){return c.apply(this,arguments)})},{key:"componentDidMount",value:function(){var e=this;this.getScrollsIds(),console.log(this.props.location.hash),this.props.location.hash&&setTimeout(function(){e.scrollToAnchor(e.props.location.hash.slice(1))})}},{key:"componentWillUnmount",value:function(){window.onscroll=null}},{key:"onScrollEvent",value:function(e){var a=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;e.length&&e.forEach(function(t,c){var s=T()("#"+t.key).get(0);(s.getBoundingClientRect()&&s.getBoundingClientRect().top)<=a-400&&(T()("."+t.key).addClass("active"),e.forEach(function(e,a){t.key!==e.key&&T()("."+e.key).removeClass("active")}))})}},{key:"render",value:function(){var e=this,a=this.state,c=a.tabs;return a.scrollsId,a.txOverviewStats,a.addressesStats,a.transactionStats,a.transactionValueStats,a.blockStats,a.accounts,a.blockSizeStats,a.blockchainSizeStats,a.priceStats,a.volume,a.pieChart,a.supplyTypesChart,this.props.intl,N.a.createElement("main",{className:"container header-overlap"},N.a.createElement("div",{className:"card mt-3 list-style-body-scroll"},N.a.createElement("nav",{className:"card-header list-style-body-scroll__header navbar navbar-expand-sm fixed-top",style:{position:"sticky",zIndex:10,background:"#f3f3f3",borderBottom:"none"}},N.a.createElement("ul",{className:"nav nav-tabs card-header-tabs navbar-nav"},Object.values(c).map(function(a){return N.a.createElement("li",{className:"nav-item scroll-li",key:a.id},N.a.createElement("a",{href:"javascript:",className:"scroll-tab nav-link ".concat(a.id," ").concat("transfer"===a.id?"active":""),key:a.id,onClick:function(){return e.scrollToAnchor(a.id)}},Object(y.c)(a.name)))}))),N.a.createElement("div",{className:"card statistics-chart",style:C.card},N.a.createElement("div",{id:"transfer"},N.a.createElement("div",{className:"row mt-5 d-flex"},N.a.createElement("div",{className:"charts-title mr-3 ml-3"},N.a.createElement("span",null,N.a.createElement("i",{className:"fa fa-exchange-alt ml-5 mr-2 "}),Object(y.c)("charts_transaction"))),N.a.createElement("div",{className:"charts-line"})),N.a.createElement("div",{className:"row mb-4 mt-4"},N.a.createElement("div",{className:"col-md-4"},N.a.createElement("div",{className:"card-chart"},w.B?N.a.createElement(O.a,{className:"card-title",to:"/data/stats/txOverviewStatsType"},N.a.createElement("span",{className:"ml-5"},Object(y.c)("charts_daily_transactions")),N.a.createElement("img",{src:t(2271),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})):N.a.createElement(O.a,{className:"card-title",to:"/data/stats/txOverviewStats"},N.a.createElement("span",{className:"ml-5"},Object(y.c)("charts_daily_transactions")),N.a.createElement("img",{src:t(2271),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))),N.a.createElement("div",{className:"col-md-4"},N.a.createElement("div",{className:"card-chart"},N.a.createElement(O.a,{className:"card-title",to:"/data/stats/totalTxns"},N.a.createElement("span",{className:"ml-5"},Object(y.c)("charts_total_transactions")),N.a.createElement("img",{src:t(2431),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))))),N.a.createElement("div",{id:"currency"},N.a.createElement("div",{className:"row mt-5 d-flex"},N.a.createElement("div",{className:"charts-title mr-3 ml-3"},N.a.createElement("span",null,N.a.createElement("i",{className:"fas fa-layer-group ml-5 mr-2"}),Object(y.c)("charts_circulation"))),N.a.createElement("div",{className:"charts-line"})),N.a.createElement("div",{className:"row mb-4 mt-4"},N.a.createElement("div",{className:"col-md-4"},N.a.createElement("div",{className:"card-chart"},N.a.createElement(O.a,{className:"card-title",to:"/data/stats/priceStats"},N.a.createElement("span",{className:"ml-5"},Object(y.c)("charts_average_price")),N.a.createElement("img",{src:t(2432),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))),N.a.createElement("div",{className:"col-md-4"},N.a.createElement("div",{className:"card-chart"},N.a.createElement(O.a,{className:"card-title",to:"/data/stats/supply"},N.a.createElement("span",{className:"ml-5"},Object(y.c)("charts_total_TRX_supply")),N.a.createElement("img",{src:t(2433),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))),N.a.createElement("div",{className:"col-md-4"},N.a.createElement("div",{className:"card-chart"},N.a.createElement(O.a,{className:"card-title",to:"/data/charts/OverallFreezingRate"},N.a.createElement("span",{className:"ml-5"},Object(y.c)("charts_overall_freezing_rate")),N.a.createElement("img",{src:t(2434),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))),N.a.createElement("div",{className:"col-md-4"},N.a.createElement("div",{className:"card-chart"},N.a.createElement(O.a,{className:"card-title",to:"/data/charts/supply"},N.a.createElement("span",{className:"ml-5"},Object(y.c)("Supply_TRX_total_chart")),N.a.createElement("img",{src:t(2435),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))))),N.a.createElement("div",{id:"address"},N.a.createElement("div",{className:"row mt-5 d-flex"},N.a.createElement("div",{className:"charts-title mr-3 ml-3"},N.a.createElement("span",null,N.a.createElement("i",{className:"fa fa-users ml-5 mr-2"}),Object(y.c)("contract_code_overview_account"))),N.a.createElement("div",{className:"charts-line"})),N.a.createElement("div",{className:"row mb-4 mt-4"},N.a.createElement("div",{className:"col-md-4"},N.a.createElement("div",{className:"card-chart"},N.a.createElement(O.a,{className:"card-title",to:"/data/stats/addressesStats"},N.a.createElement("span",{className:"ml-5"},Object(y.c)("charts_new_addresses")),N.a.createElement("img",{src:t(2436),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))),N.a.createElement("div",{className:"col-md-4"},N.a.createElement("div",{className:"card-chart"},N.a.createElement(O.a,{className:"card-title",to:"/data/charts/HoldTrxAccount"},N.a.createElement("span",{className:"ml-5"},Object(y.c)("chart_hold_trx_account")),N.a.createElement("img",{src:t(2437),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))))),N.a.createElement("div",{id:"block"},N.a.createElement("div",{className:"row mt-5 d-flex"},N.a.createElement("div",{className:"charts-title mr-3 ml-3"},N.a.createElement("span",null,N.a.createElement("i",{className:"fas fa-cubes ml-5 mr-2"}),Object(y.c)("charts_block"))),N.a.createElement("div",{className:"charts-line"})),N.a.createElement("div",{className:"row mb-4 mt-4"},N.a.createElement("div",{className:"col-md-4"},N.a.createElement("div",{className:"card-chart"},N.a.createElement(O.a,{className:"card-title",to:"/data/stats/blockSizeStats"},N.a.createElement("span",{className:"ml-5"},Object(y.c)("charts_average_blocksize")),N.a.createElement("img",{src:t(2438),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))),N.a.createElement("div",{className:"col-md-4"},N.a.createElement("div",{className:"card-chart"},N.a.createElement(O.a,{className:"card-title",to:"/data/stats/blockchainSizeStats"},N.a.createElement("span",{className:"ml-5"},Object(y.c)("charts_total_average_blocksize")),N.a.createElement("img",{src:t(2439),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))))),N.a.createElement("div",{id:"contract"},N.a.createElement("div",{className:"row mt-5 d-flex"},N.a.createElement("div",{className:"charts-title mr-3 ml-3"},N.a.createElement("span",null,N.a.createElement("i",{className:"fa fa-file-contract ml-5 mr-2"}),Object(y.c)("charts_contract"))),N.a.createElement("div",{className:"charts-line"})),N.a.createElement("div",{className:"row mb-4 mt-4"},N.a.createElement("div",{className:"col-md-4"},N.a.createElement("div",{className:"card-chart"},N.a.createElement(O.a,{className:"card-title",to:"/data/stats/EnergyConsumeDistribution"},N.a.createElement("span",{className:"ml-5"},Object(y.c)("charts_daily_energy_contracts")),N.a.createElement("img",{src:t(2440),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))),N.a.createElement("div",{className:"col-md-4"},N.a.createElement("div",{className:"card-chart"},N.a.createElement(O.a,{className:"card-title",to:"/data/stats/ContractInvocation"},N.a.createElement("span",{className:"ml-5"},Object(y.c)("charts_contract_calling")),N.a.createElement("img",{src:t(2441),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))),N.a.createElement("div",{className:"col-md-4"},N.a.createElement("div",{className:"card-chart"},N.a.createElement(O.a,{className:"card-title",to:"/data/stats/ContractInvocationDistribution"},N.a.createElement("span",{className:"ml-5"},Object(y.c)("charts_daily_contract_calling_profile")),N.a.createElement("img",{src:t(2442),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))))),N.a.createElement("div",{id:"sr"},N.a.createElement("div",{className:"row mt-5 d-flex"},N.a.createElement("div",{className:"charts-title mr-3 ml-3"},N.a.createElement("span",null,N.a.createElement("i",{className:"fas fa-medal ml-5 mr-2"}),Object(y.c)("charts_SR"))),N.a.createElement("div",{className:"charts-line"})),N.a.createElement("div",{className:"row mb-4 mt-4"},N.a.createElement("div",{className:"col-md-4"},N.a.createElement("div",{className:"card-chart"},N.a.createElement(O.a,{className:"card-title",to:"/data/stats/pieChart"},N.a.createElement("span",{className:"ml-5"},Object(y.c)("produce_distribution")),N.a.createElement("img",{src:t(2443),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))))),N.a.createElement("div",{id:"network"},N.a.createElement("div",{className:"row mt-5 d-flex"},N.a.createElement("div",{className:"charts-title mr-3 ml-3"},N.a.createElement("span",null,N.a.createElement("i",{className:"fas fa-wifi ml-5 mr-2"}),Object(y.c)("chart_network"))),N.a.createElement("div",{className:"charts-line"})),N.a.createElement("div",{className:"row mb-4 mt-4"},N.a.createElement("div",{className:"col-md-4"},N.a.createElement("div",{className:"card-chart"},N.a.createElement(O.a,{className:"card-title",to:"/data/stats/EnergyConsume"},N.a.createElement("span",{className:"ml-5"},Object(y.c)("charts_daily_energy_consumption")),N.a.createElement("img",{src:t(2444),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))))))))}}]),a}(N.a.Component),C={list:{fontSize:18},card:{border:"none",borderRadius:0,width:"100%"}},B={loadPriceData:x.c};a.default=Object(S.connect)(function(e){return{priceGraph:e.markets.price}},B)(Object(_.h)(z))}}]);