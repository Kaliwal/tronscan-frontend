(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{2413:function(e,a,t){e.exports=t.p+"static/media/tron-empty.a9a72332.svg"},3429:function(e,a,t){"use strict";t.r(a);var l,n=t(1428),o=t.n(n),r=t(264),s=t.n(r),p=t(2),c=t.n(p),i=t(8),m=t(6),u=t(16),d=t(15),E=t(21),g=t(20),_=t(0),f=t.n(_),v=t(28),y=t(3),M=t(18),b=t(13),h=t(90),w=t(265),T=t(4),O=t(63),j=t(50),A=t.n(j),C=t(39),V=t(140),S=Object(V.a)(l=function(e){Object(E.a)(r,e);var a,l,n=Object(g.a)(r);function r(){var e;return Object(u.a)(this,r),(e=n.call(this)).load=Object(m.a)(c.a.mark(function a(){var t,l,n,o,r,s,p,m,u,d,E,g,_,f,v,y=arguments;return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=0<y.length&&void 0!==y[0]?y[0]:1,l=1<y.length&&void 0!==y[1]?y[1]:20,n=2<y.length?y[2]:void 0,o=e.props,r=o.account,o.currentWallet,e.setState({loading:!n}),a.next=7,M.e.getMyProposalList({limit:l,start:(t-1)*l,address:r.address,type:2});case 7:if(s=a.sent,p=s.data,m=s.total,u=["getMaintenanceTimeInterval","getAccountUpgradeCost","getCreateAccountFee","getTransactionFee","getAssetIssueFee","getWitnessPayPerBlock","getWitnessStandbyAllowance","getCreateNewAccountFeeInSystemContract","getCreateNewAccountBandwidthRate","getAllowCreationOfContracts","getRemoveThePowerOfTheGr","getEnergyFee","getExchangeCreateFee","getMaxCpuTimeOfOneTx","getAllowUpdateAccountName","getAllowSameTokenName","getAllowDelegateResource","getTotalEnergyLimit","getAllowTvmTransferTrc10","getTotalEnergyLimitNew","getAllowMultiSign","getAllowAdaptiveEnergy","getUpdateAccountPermissionFee","getMultiSignFee","getAllowProtoFilterNum","","getAllowTvmConstantinople","getAllowShieldedTransaction","getShieldedTransactionFee","getAdaptiveResourceLimitMultiplier","getChangeDelegation","getWitness127PayPerBlock","getAllowTvmSolidity059","getAdaptiveResourceLimitTargetRatio","getShieldedTransactionCreateAccountFee","getForbidTransferToContract"],d=[{id:"1000000",key:"getChargingSwitch"},{id:"1000001",key:"getSideChainGateWayList"},{id:"1000003",key:"getProposalExpireTime"},{id:"1000004",key:"getVoteWitnessSwitch"},{id:"1000007",key:"getFundInjectAddress"},{id:"1000008",key:"getFundDistributeEnableSwitch"},{id:"1000009",key:"getDayToSustainByFund"},{id:"1000010",key:"getPercentToPayWitness"}],T.B)for(E in p)for(g in p[E].paramters)p[E].paramters[g].proposalKey=u[p[E].paramters[g].key],p[E].paramters[g].proposalVal=p[E].paramters[g].value;else for(_ in p)for(f in p[_].paramters)for(v in d)d[v].id==p[_].paramters[f].key&&(p[_].paramters[f].proposalKey=d[v].key,p[_].paramters[f].proposalVal=p[_].paramters[f].value);e.setState({loading:!1,dataSource:p,total:m,page:t,pagination:Object(i.a)({},e.state.pagination,{total:m})});case 14:case"end":return a.stop()}},a)})),e.handleTableChange=function(a,t,l){var n=Object(i.a)({},e.state.pagination);n.current=a.current,n.pageSize=a.pageSize,e.setState({pagination:n},function(){e.load(n.current,n.pageSize),clearInterval(e.state.timer);var a=setInterval(function(){e.load(n.current,n.pageSize,1)},1e4);e.setState({timer:a})})},e.hideModal=function(){e.setState({modal:null,isAction:!1})},e.state={dataSource:[],total:0,loading:!1,pagination:{showQuickJumper:!0,position:"bottom",showSizeChanger:!0,defaultPageSize:20,total:0},modal:null,isAction:!1,timer:null},e}return Object(d.a)(r,[{key:"componentDidMount",value:function(){var e=this,a=this.props;a.account,a.currentWallet,this.load();var t=setInterval(function(){e.load(1,20,1)},1e4);this.setState({timer:t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"getColumns",value:function(){var e=this,a=this.props,t=a.account,l=a.intl;return this.state.dataSource,[{title:s()(l.formatMessage({id:"proposal_content_info"})),dataIndex:"proposalVal",key:"proposalVal",width:"40%",render:function(e,a){return f.a.createElement("div",{style:{fontFamily:"HelveticaNeue-Medium"}},a.paramters.map(function(e,a){return f.a.createElement("div",{key:a},T.B?f.a.createElement("div",null,"getMaintenanceTimeInterval"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_1"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal/36e5)," \xa0",f.a.createElement("span",null,l.formatMessage({id:"propose_hour"}))),"getAccountUpgradeCost"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_2"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal/T.L)," \xa0",f.a.createElement("span",null,"TRX")),"getCreateAccountFee"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_3"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal/T.L)," \xa0",f.a.createElement("span",null,"TRX")),"getTransactionFee"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_4"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal)," \xa0",f.a.createElement("span",null,"Sun/byte")),"getAssetIssueFee"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_5"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal/T.L)," \xa0",f.a.createElement("span",null,"TRX")),"getWitnessPayPerBlock"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_6"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal/T.L)," \xa0",f.a.createElement("span",null,"TRX"))),"getWitnessStandbyAllowance"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_7"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal/T.L)," \xa0",f.a.createElement("span",null,"TRX")),"getCreateNewAccountFeeInSystemContract"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_8"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal/T.L)," \xa0",f.a.createElement("span",null,"TRX")),"getCreateNewAccountBandwidthRate"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_9"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal)," \xa0",f.a.createElement("span",null,"bandwith/byte")),"getAllowCreationOfContracts"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_10"})),f.a.createElement("span",null,Object(y.c)("propose_activate"))),"getRemoveThePowerOfTheGr"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_11"}))),"getEnergyFee"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_12"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal/T.L," TRX")),"getExchangeCreateFee"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_13"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal/T.L," TRX")),"getMaxCpuTimeOfOneTx"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_14"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal," ms")),"getAllowUpdateAccountName"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_15"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?f.a.createElement("span",null,Object(y.c)("propose_allowed")):f.a.createElement("span",null,Object(y.c)("propose_not_allowed"))),"getAllowSameTokenName"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_16"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?f.a.createElement("span",null,Object(y.c)("propose_allowed")):f.a.createElement("span",null,Object(y.c)("propose_not_allowed"))),"getAllowDelegateResource"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_17"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?f.a.createElement("span",null,Object(y.c)("propose_allowed")):f.a.createElement("span",null,Object(y.c)("propose_not_allowed"))),"getTotalEnergyLimit"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_18"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal)),"getAllowTvmTransferTrc10"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_19"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?f.a.createElement("span",null,Object(y.c)("propose_allowed")):f.a.createElement("span",null,Object(y.c)("propose_not_allowed"))),"getTotalEnergyLimitNew"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_18_1"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal)),"getTotalEnergyCurrentLimit"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_20"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal," ENERGY")),"getAllowMultiSign"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_21"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?f.a.createElement("span",null,Object(y.c)("propose_allowed")):f.a.createElement("span",null,Object(y.c)("propose_not_allowed"))),"getAllowAdaptiveEnergy"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_22"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?f.a.createElement("span",null,Object(y.c)("propose_allowed")):f.a.createElement("span",null,Object(y.c)("propose_not_allowed"))),"getTotalEnergyTargetLimit"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_23"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal),"/",f.a.createElement("span",null,Object(y.c)("propose_minute"))),"getTotalEnergyAverageUsage"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_24"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?f.a.createElement("span",null,f.a.createElement("span",null,e.proposalVal),"/",f.a.createElement("span",null,Object(y.c)("propose_minute"))):f.a.createElement("span",null,Object(y.c)("propose_unactivate"))),"getUpdateAccountPermissionFee"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_25"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal/T.L)," \xa0",f.a.createElement("span",null,"TRX")),"getMultiSignFee"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_26"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal/T.L)," \xa0",f.a.createElement("span",null,"TRX")),"getAllowProtoFilterNum"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_27"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?f.a.createElement("span",null,Object(y.c)("propose_activate")):f.a.createElement("span",null,Object(y.c)("propose_unactivate"))),"getAllowTvmConstantinople"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_28"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?f.a.createElement("span",null,Object(y.c)("propose_allowed")):f.a.createElement("span",null,Object(y.c)("propose_not_allowed"))),"getAllowShieldedTransaction"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_29"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?f.a.createElement("span",null,Object(y.c)("propose_allowed")):f.a.createElement("span",null,Object(y.c)("propose_not_allowed"))),"getShieldedTransactionFee"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_28_1"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal/T.L)," \xa0",f.a.createElement("span",null,"TRX")),"getAdaptiveResourceLimitMultiplier"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_29_1"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal)),"getChangeDelegation"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_30"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?f.a.createElement("span",null,Object(y.c)("propose_activate")):f.a.createElement("span",null,Object(y.c)("propose_unactivate"))),"getWitness127PayPerBlock"==e.proposalKey&&f.a.createElement("div",{className:"mt-1"},f.a.createElement("span",null,l.formatMessage({id:"propose_31"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal/T.L)," \xa0",f.a.createElement("span",null,"TRX")),"getAllowTvmSolidity059"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_32"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?f.a.createElement("span",null,Object(y.c)("propose_allowed")):f.a.createElement("span",null,Object(y.c)("propose_not_allowed"))),"getAdaptiveResourceLimitTargetRatio"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_33"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal)),"getShieldedTransactionCreateAccountFee"==e.proposalKey&&f.a.createElement("div",{className:"mt-1"},f.a.createElement("span",null,l.formatMessage({id:"propose_34"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal/T.L)," \xa0",f.a.createElement("span",null,"TRX")),"getForbidTransferToContract"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"propose_35"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?f.a.createElement("span",null,Object(y.c)("propose_prohibit")):f.a.createElement("span",null,Object(y.c)("propose_not_prohibit")))):f.a.createElement("div",null,"getChargingSwitch"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"sun_propose_1"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?f.a.createElement("span",null,Object(y.c)("propose_activate")):f.a.createElement("span",null,Object(y.c)("propose_unactivate"))),"getSideChainGateWayList"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"sun_propose_2"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal)),"getProposalExpireTime"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"sun_propose_3"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal)),"getVoteWitnessSwitch"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"sun_propose_4"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?f.a.createElement("span",null,Object(y.c)("propose_activate")):f.a.createElement("span",null,Object(y.c)("propose_unactivate"))),"getFundInjectAddress"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"sun_propose_5"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal)),"getFundDistributeEnableSwitch"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"sun_propose_6"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?f.a.createElement("span",null,Object(y.c)("propose_activate")):f.a.createElement("span",null,Object(y.c)("propose_unactivate"))),"getDayToSustainByFund"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"sun_propose_7"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal," ",Object(y.c)("day"))),"getPercentToPayWitness"==e.proposalKey&&f.a.createElement("div",null,f.a.createElement("span",null,l.formatMessage({id:"sun_propose_8"})),f.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),f.a.createElement("span",null,e.proposalVal," %"))))}))}},{title:s()(l.formatMessage({id:"proposal_time_of_creation"}))+"/ "+s()(l.formatMessage({id:"proposal_endtime"})),dataIndex:"createTime",key:"createTime",width:"15%",align:"center",render:function(e,a){return f.a.createElement("div",null,f.a.createElement("div",{style:{color:"#333"}},f.a.createElement(b.a,{value:Number(e)}),"\xa0",f.a.createElement(b.e,{value:Number(e),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})),f.a.createElement("div",{style:{color:"#C23631"}},f.a.createElement(b.a,{value:Number(a.expirationTime)}),"\xa0",f.a.createElement(b.e,{value:Number(a.expirationTime),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})))}},{title:s()(l.formatMessage({id:"proposal_status"})),dataIndex:"state",key:"state",align:"center",width:"12%",render:function(e){return f.a.createElement("div",null,"PENDING"==e&&f.a.createElement("div",null,f.a.createElement("span",{className:"badge badge-warning text-uppercase badge-success-radius"},Object(y.c)("proposal_voting"))),"DISAPPROVED"==e&&f.a.createElement("div",null,f.a.createElement("span",{className:"badge badge-danger text-uppercase badge-success-radius"},Object(y.c)("proposal_ineffective"))),"APPROVED"==e&&f.a.createElement("div",null,f.a.createElement("span",{className:"badge badge-success text-uppercase badge-success-radius"},Object(y.c)("proposal_effective"))),"CANCELED"==e&&f.a.createElement("div",null,f.a.createElement("span",{className:"badge badge-secondary text-uppercase badge-success-radius"},Object(y.c)("proposal_cancelled"))))}},{title:function(){var e=s()(l.formatMessage({id:"proposal_valid_votes"}))+" / "+s()(l.formatMessage({id:"proposal_total_votes"})),a=s()(l.formatMessage({id:"proposal_votes_tip"}));return f.a.createElement("div",null,e," ",f.a.createElement("span",{className:"mr-2"},f.a.createElement(w.a,{placement:"top",text:a})))},dataIndex:"votes",key:"votes",width:"12%",align:"center",render:function(e,a){return"".concat(a.validVotes,"/").concat(a.totalVotes)}},{title:s()(l.formatMessage({id:"proposal_action"})),dataIndex:"details",key:"details",width:"12%",align:"center",render:function(a,l){return f.a.createElement("div",{className:"detail-action"},f.a.createElement("div",null,f.a.createElement(O.a,{to:"/proposal/".concat(l.proposalId),className:"proposal-more"},Object(y.c)("proposal_more"))),t.address&&"PENDING"===l.state?f.a.createElement("div",null,f.a.createElement("div",null,f.a.createElement("a",{href:"javascript:;",className:"proposal-cancel",onClick:function(){return e.cancelModal(l.proposalId)}},Object(y.c)("proposal_cancel_approve")))):"")}}]}},{key:"cancelModal",value:function(e){var a=this,t=this.props.intl;this.setState({modal:f.a.createElement(A.a,{showCancel:!0,title:"",confirmBtnText:t.formatMessage({id:"confirm"}),cancelBtnText:t.formatMessage({id:"cancel"}),confirmBtnBsStyle:"link",confirmBtnCssClass:"modal-confirm",cancelBtnCssClass:"modal-cancel",onCancel:function(){return a.hideModal()},onConfirm:function(){return a.cancelFun(e)}},f.a.createElement("div",{style:{color:"#333",padding:"30px 0"}},Object(y.c)("proposal_cancel_tip")))})}},{key:"cancelFun",value:(l=Object(m.a)(c.a.mark(function e(a){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.isAction)return e.abrupt("return");e.next=2;break;case 2:return this.setState({isAction:!0}),e.next=5,this.getResult(a,!1);case 5:e.sent?this.setState({modal:f.a.createElement(A.a,{success:!0,timeout:"3000",onConfirm:this.hideModal},Object(y.c)("proposal_success"))}):this.setState({modal:f.a.createElement(A.a,{warning:!0,timeout:"3000",onConfirm:this.hideModal},Object(y.c)("proposal_fail"))}),this.setState({isAction:!1});case 8:case"end":return e.stop()}},e,this)})),function(e){return l.apply(this,arguments)})},{key:"getResult",value:(a=Object(m.a)(c.a.mark(function e(a,t){var l,n,o,r,s,p,i,m,u;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.isTronLink,n=this.props.account,T.B)return"ACCOUNT_LEDGER"===this.props.walletType.type?o=this.props.tronWeb():"ACCOUNT_TRONLINK"!==this.props.walletType.type&&"ACCOUNT_PRIVATE_KEY"!==this.props.walletType.type||(o=n.tronWeb),e.next=6,o.transactionBuilder.voteProposal(a,t,n.address,1).catch(function(e){return console.log(e)});e.next=14;break;case 6:return r=e.sent,e.next=9,Object(C.c)(r,o);case 9:s=e.sent,p=s.result,l=p,e.next=22;break;case 14:return e.next=16,n.sunWeb.sidechain.transactionBuilder.voteProposal(a,t,n.address,1).catch(function(e){return console.log(e)});case 16:return i=e.sent,e.next=19,Object(C.e)(i,n.sunWeb);case 19:m=e.sent,u=m.result,l=u;case 22:return e.abrupt("return",l);case 23:case"end":return e.stop()}},e,this)})),function(e,t){return a.apply(this,arguments)})},{key:"render",value:function(){var e=this.state,a=e.modal,l=(e.page,e.total),n=(e.pageSize,e.loading),r=e.dataSource,s=(e.emptyState,e.pagination),p=this.getColumns();return this.props.intl,f.a.createElement("div",{className:""},a,n&&f.a.createElement("div",{className:"loading-style"},f.a.createElement(h.b,null)),!n&&(0<l?f.a.createElement(o.a,{bordered:!0,columns:p,rowKey:function(e,a){return a},dataSource:r,scroll:scroll,pagination:s,loading:n,onChange:this.handleTableChange}):f.a.createElement("div",{className:"my-proposals-empty"},f.a.createElement("img",{src:t(2413),alt:""}),f.a.createElement("div",null,Object(y.b)("trc20_no_data"),",",Object(y.b)("proposal_go"),f.a.createElement(O.a,{to:"/proposalscreate"},Object(y.b)("proposal_create")),Object(y.b)("proposal_or"),f.a.createElement(O.a,{to:"/proposals"},Object(y.b)("proposal_vote_link"))))))}}]),r}(f.a.Component))||l;a.default=Object(v.connect)(function(e){return{account:e.app.account,currentWallet:e.wallet.current,walletType:e.app.wallet,locale:e.app.activeLanguage}},null)(Object(b.h)(S))}}]);