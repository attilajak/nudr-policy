'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');
var request = require('request');

module.exports.createIndividualBdtData = function createIndividualBdtData (req, res, next) {
  var bdtReferenceId = req.swagger.params['bdtReferenceId'].value;
  var body = req.swagger.params['body'].value;
  Default.createIndividualBdtData(bdtReferenceId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createIndividualPolicyDataSubscription = function createIndividualPolicyDataSubscription (req, res, next) {
  //var body = req.swagger.params['body'].value;
  var body;
  Default.createIndividualPolicyDataSubscription(body)
    .then(function (response) {
      console.log("Subscription Invoked")
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createOrReplaceUEPolicySet = function createOrReplaceUEPolicySet (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var body = req.swagger.params['body'].value;
  Default.createOrReplaceUEPolicySet(ueId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createUsageMonitoringResource = function createUsageMonitoringResource (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var usageMonId = req.swagger.params['usageMonId'].value;
  var body = req.swagger.params['body'].value;
  Default.createUsageMonitoringResource(ueId,usageMonId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteIndividualBdtData = function deleteIndividualBdtData (req, res, next) {
  var bdtReferenceId = req.swagger.params['bdtReferenceId'].value;
  Default.deleteIndividualBdtData(bdtReferenceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteIndividualPolicyDataSubscription = function deleteIndividualPolicyDataSubscription (req, res, next) {
  var subsId = req.swagger.params['subsId'].value;
  Default.deleteIndividualPolicyDataSubscription(subsId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUsageMonitoringInformation = function deleteUsageMonitoringInformation (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var usageMonId = req.swagger.params['usageMonId'].value;
  Default.deleteUsageMonitoringInformation(ueId,usageMonId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readAccessAndMobilityPolicyData = function readAccessAndMobilityPolicyData (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  Default.readAccessAndMobilityPolicyData(ueId)
    .then(function (response) {
      var response = JSON.parse('{"praInfos":{},"subscCats":["Sample tet"]}')
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readBdtData = function readBdtData (req, res, next) {
  Default.readBdtData()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readIndividualBdtData = function readIndividualBdtData (req, res, next) {
  var bdtReferenceId = req.swagger.params['bdtReferenceId'].value;
  Default.readIndividualBdtData(bdtReferenceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readOperatorSpecificData = function readOperatorSpecificData (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var fields = req.swagger.params['fields'].value;
  Default.readOperatorSpecificData(ueId,fields)
    .then(function (response) {

console.log("Posting")
var req;
var options = {
  uri: 'http://127.0.0.1:8081/npcf-smpolicycontrol/v1/sm-policies/notify/update',
  method: 'POST',
  json: {"resourceUri":"http://27.0.0.1:8082/policy-data/ues/777777/sm-data","smPolicyDecision":{"chargingInfo":{"primaryChfAddress":"http://127.0.0.1:8099/primaryChfAddress","secondaryChfAddress":"http://127.0.0.1:8099/secondaryChfAddress"},"chgDecs":{"additionalProp1":{"afChargingIdentifier":0,"appSvcProvId":"string","chgId":"string","offline":true,"online":true,"ratingGroup":0,"sdfHandl":true,"serviceId":0,"sponsorId":"string"},"additionalProp2":{"afChargingIdentifier":0,"appSvcProvId":"string","chgId":"string","offline":true,"online":true,"ratingGroup":0,"sdfHandl":true,"serviceId":0,"sponsorId":"string"},"additionalProp3":{"afChargingIdentifier":0,"appSvcProvId":"string","chgId":"string","offline":true,"online":true,"ratingGroup":0,"sdfHandl":true,"serviceId":0,"sponsorId":"string"}},"conds":{"additionalProp1":{"activationTime":"2019-07-24T07:37:22.159Z","condId":"string","deactivationTime":"2019-07-24T07:37:22.159Z"},"additionalProp2":{"activationTime":"2019-07-24T07:37:22.159Z","condId":"string","deactivationTime":"2019-07-24T07:37:22.159Z"},"additionalProp3":{"activationTime":"2019-07-24T07:37:22.159Z","condId":"string","deactivationTime":"2019-07-24T07:37:22.159Z"}},"ipv4Index":0,"ipv6Index":0,"lastReqRuleData":[{"refPccRuleIds":["string"],"reqData":["CH_ID","string"]}],"lastReqUsageData":{"allUmIds":true,"refUmIds":["string"]},"offline":true,"online":true,"pccRules":{"additionalProp1":{"appId":"string","appReloc":true,"contVer":0,"flowInfos":[{"ethFlowDescription":{"destMacAddr":"Fb-BA-ae-49-F4-Ec","ethType":"string","fDesc":"string","sourceMacAddr":"Fb-BA-ae-49-F4-Ec","vlanTags":["string"]},"flowDescription":"string","flowLabel":"string","packFiltId":"string","packetFilterUsage":true,"spi":"string","tosTrafficClass":"string"}],"pccRuleId":"string","precedence":0,"refChgData":["string"],"refCondData":"string","refQosData":["string"],"refTcData":["string"],"refUmData":["string"]},"additionalProp2":{"appId":"string","appReloc":true,"contVer":0,"flowInfos":[{"ethFlowDescription":{"destMacAddr":"Fb-BA-ae-49-F4-Ec","ethType":"string","fDesc":"string","sourceMacAddr":"Fb-BA-ae-49-F4-Ec","vlanTags":["string"]},"flowDescription":"string","flowLabel":"string","packFiltId":"string","packetFilterUsage":true,"spi":"string","tosTrafficClass":"string"}],"pccRuleId":"string","precedence":0,"refChgData":["string"],"refCondData":"string","refQosData":["string"],"refTcData":["string"],"refUmData":["string"]},"additionalProp3":{"appId":"string","appReloc":true,"contVer":0,"flowInfos":[{"ethFlowDescription":{"destMacAddr":"Fb-BA-ae-49-F4-Ec","ethType":"string","fDesc":"string","sourceMacAddr":"Fb-BA-ae-49-F4-Ec","vlanTags":["string"]},"flowDescription":"string","flowLabel":"string","packFiltId":"string","packetFilterUsage":true,"spi":"string","tosTrafficClass":"string"}],"pccRuleId":"string","precedence":0,"refChgData":["string"],"refCondData":"string","refQosData":["string"],"refTcData":["string"],"refUmData":["string"]}},"pcscfRestIndication":true,"policyCtrlReqTriggers":["PLMN_CH","string"],"praInfos":{"additionalProp1":{"ecgiList":[{"eutraCellId":"8198677","plmnId":{"mcc":"234","mnc":"244"}}],"globalRanNodeIdList":[{"plmnId":{"mcc":"234","mnc":"244"},"ngeNbId":"MacroNGeNB-Ab123"}],"ncgiList":[{"nrCellId":"458A88488","plmnId":{"mcc":"234","mnc":"244"}}],"praId":"string","trackingAreaList":[{"plmnId":{"mcc":"234","mnc":"244"},"tac":"A198"}]},"additionalProp2":{"ecgiList":[{"eutraCellId":"8198677","plmnId":{"mcc":"234","mnc":"244"}}],"globalRanNodeIdList":[{"plmnId":{"mcc":"234","mnc":"244"},"ngeNbId":"MacroNGeNB-Ab123"}],"ncgiList":[{"nrCellId":"458A88488","plmnId":{"mcc":"234","mnc":"244"}}],"praId":"string","trackingAreaList":[{"plmnId":{"mcc":"234","mnc":"244"},"tac":"A198"}]},"additionalProp3":{"ecgiList":[{"eutraCellId":"8198677","plmnId":{"mcc":"234","mnc":"244"}}],"globalRanNodeIdList":[{"plmnId":{"mcc":"234","mnc":"244"},"ngeNbId":"MacroNGeNB-Ab123"}],"ncgiList":[{"nrCellId":"458A88488","plmnId":{"mcc":"234","mnc":"244"}}],"praId":"string","trackingAreaList":[{"plmnId":{"mcc":"234","mnc":"244"},"tac":"A198"}]}},"qosChars":{"additionalProp1":{"5qi":1,"averagingWindow":1,"maxDataBurstVol":1,"resourceType":"NON_GBR","packetDelayBudget":1,"packetErrorRate":"1E-5","priorityLevel":1},"additionalProp2":{"5qi":1,"averagingWindow":1,"maxDataBurstVol":1,"resourceType":"NON_GBR","packetDelayBudget":1,"packetErrorRate":"1E-5","priorityLevel":1},"additionalProp3":{"5qi":1,"averagingWindow":1,"maxDataBurstVol":1,"resourceType":"NON_GBR","packetDelayBudget":1,"packetErrorRate":"1E-5","priorityLevel":1}},"qosDecs":{"additionalProp1":{"5qi":1,"arp":{"preemptCap":"NOT_PREEMPT","preemptVuln":"NOT_PREEMPTABLE","priorityLevel":1},"averWindow":2000,"defQosFlowIndication":true,"gbrDl":"06877259326617319404306103 Mbps","gbrUl":"06877259326617319404306103 Mbps","maxDataBurstVol":1,"maxPacketLossRateDl":0,"maxPacketLossRateUl":0,"maxbrDl":"06877259326617319404306103 Mbps","maxbrUl":"06877259326617319404306103 Mbps","priorityLevel":1,"qnc":true,"qosId":"string","reflectiveQos":true,"sharingKeyDl":"string","sharingKeyUl":"string"},"additionalProp2":{"5qi":0,"arp":{"priorityLevel":1,"preemptCap":"NOT_PREEMPT","preemptVuln":"NOT_PREEMPTABLE"},"averWindow":2000,"defQosFlowIndication":true,"gbrDl":"06877259326617319404306103 Mbps","gbrUl":"06877259326617319404306103 Mbps","maxDataBurstVol":1,"maxPacketLossRateDl":0,"maxPacketLossRateUl":0,"maxbrDl":"06877259326617319404306103 Mbps","maxbrUl":"06877259326617319404306103 Mbps","priorityLevel":1,"qnc":true,"qosId":"string","reflectiveQos":true,"sharingKeyDl":"string","sharingKeyUl":"string"},"additionalProp3":{"5qi":0,"arp":{"priorityLevel":1,"preemptCap":"NOT_PREEMPT","preemptVuln":"NOT_PREEMPTABLE"},"averWindow":2000,"defQosFlowIndication":true,"gbrDl":"06877259326617319404306103 Mbps","gbrUl":"06877259326617319404306103 Mbps","maxDataBurstVol":1,"maxPacketLossRateDl":0,"maxPacketLossRateUl":0,"maxbrDl":"06877259326617319404306103 Mbps","maxbrUl":"06877259326617319404306103 Mbps","priorityLevel":1,"qnc":true,"qosId":"string","reflectiveQos":true,"sharingKeyDl":"string","sharingKeyUl":"string"}},"reflectiveQoSTimer":0,"revalidationTime":"2019-07-24T07:37:22.159Z","sessRules":{"additionalProp1":{"authDefQos":{"5qi":0,"arp":{"priorityLevel":1,"preemptCap":"NOT_PREEMPT","preemptVuln":"NOT_PREEMPTABLE"},"averWindow":830,"maxDataBurstVol":1,"priorityLevel":1},"authSessAmbr":{"downlink":"06877259326617319404306103 Mbps","uplink":"06877259326617319404306103 Mbps"},"refCondData":"string","refUmData":"string","sessRuleId":"string"},"additionalProp2":{"authDefQos":{"5qi":0,"arp":{"priorityLevel":1,"preemptCap":"NOT_PREEMPT","preemptVuln":"NOT_PREEMPTABLE"},"averWindow":830,"maxDataBurstVol":1,"priorityLevel":1},"authSessAmbr":{"downlink":"06877259326617319404306103 Mbps","uplink":"06877259326617319404306103 Mbps"},"refCondData":"string","refUmData":"string","sessRuleId":"string"},"additionalProp3":{"authDefQos":{"5qi":0,"arp":{"priorityLevel":1,"preemptCap":"NOT_PREEMPT","preemptVuln":"NOT_PREEMPTABLE"},"averWindow":2000,"maxDataBurstVol":1,"priorityLevel":1},"authSessAmbr":{"downlink":"06877259326617319404306103 Mbps","uplink":"06877259326617319404306103 Mbps"},"refCondData":"string","refUmData":"string","sessRuleId":"string"}},"suppFeat":"28bb9c923C2E3AFA8f8213F3f8975d","traffContDecs":{"additionalProp1":{"muteNotif":true,"redirectInfo":{"redirectEnabled":true,"redirectServerAddress":"string"},"routeToLocs":[null,null],"tcId":"string","trafficSteeringPolIdDl":"string","trafficSteeringPolIdUl":"string","upPathChgEvent":{"dnaiChgType":"EARLY","notifCorreId":"string","notificationUri":"string"}},"additionalProp2":{"muteNotif":true,"redirectInfo":{"redirectEnabled":true,"redirectServerAddress":"string"},"routeToLocs":[null,null],"tcId":"string","trafficSteeringPolIdDl":"string","trafficSteeringPolIdUl":"string","upPathChgEvent":{"dnaiChgType":"EARLY","notifCorreId":"string","notificationUri":"string"}},"additionalProp3":{"muteNotif":true,"redirectInfo":{"redirectEnabled":true,"redirectServerAddress":"string"},"routeToLocs":[null,null],"tcId":"string","trafficSteeringPolIdDl":"string","trafficSteeringPolIdUl":"string","upPathChgEvent":{"dnaiChgType":"EARLY","notifCorreId":"string","notificationUri":"string"}}},"umDecs":{"additionalProp1":{"exUsagePccRuleIds":["string"],"inactivityTime":0,"monitoringTime":"2019-07-24T07:37:22.158Z","nextTimeThreshold":0,"nextVolThreshold":0,"nextVolThresholdDownlink":0,"nextVolThresholdUplink":0,"timeThreshold":0,"umId":"string","volumeThreshold":0,"volumeThresholdDownlink":0,"volumeThresholdUplink":0},"additionalProp2":{"exUsagePccRuleIds":["string"],"inactivityTime":0,"monitoringTime":"2019-07-24T07:37:22.158Z","nextTimeThreshold":0,"nextVolThreshold":0,"nextVolThresholdDownlink":0,"nextVolThresholdUplink":0,"timeThreshold":0,"umId":"string","volumeThreshold":0,"volumeThresholdDownlink":0,"volumeThresholdUplink":0},"additionalProp3":{"exUsagePccRuleIds":["string"],"inactivityTime":0,"monitoringTime":"2019-07-24T07:37:22.158Z","nextTimeThreshold":0,"nextVolThreshold":0,"nextVolThresholdDownlink":0,"nextVolThresholdUplink":0,"timeThreshold":0,"umId":"string","volumeThreshold":0,"volumeThresholdDownlink":0,"volumeThresholdUplink":0}}}}
};
request.post(
    options,
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            console.log(req);
        }
        else {
          console.log(error);
          console.log(req);
        }
    }
);
      var response = JSON.parse('{}')
      utils.writeJson(res, response, 204);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readPlmnUePolicySet = function readPlmnUePolicySet (req, res, next) {
  var plmnId = req.swagger.params['plmnId'].value;
  Default.readPlmnUePolicySet(plmnId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readSessionManagementPolicyData = function readSessionManagementPolicyData (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  Default.readSessionManagementPolicyData(ueId)
    .then(function (response) {
      var response = JSON.parse('{"smPolicySnssaiData":{},"umDataLimits":{},"umData":{}}')
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readSponsorConnectivityData = function readSponsorConnectivityData (req, res, next) {
  var sponsorId = req.swagger.params['sponsorId'].value;
  Default.readSponsorConnectivityData(sponsorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readUEPolicySet = function readUEPolicySet (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  Default.readUEPolicySet(ueId)
    .then(function (response) {
      var response = JSON.parse('{"praInfos":{},"subscCats":["Sample text"],"uePolicySections":{},"upsis":["Sample text"],"allowedRouteSelDescs":{},"andspInd":true,"pei":"Sample text","osIds":["Sample text"]}')
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readUsageMonitoringInformation = function readUsageMonitoringInformation (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var usageMonId = req.swagger.params['usageMonId'].value;
  Default.readUsageMonitoringInformation(ueId,usageMonId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.replaceIndividualPolicyDataSubscription = function replaceIndividualPolicyDataSubscription (req, res, next) {
  var subsId = req.swagger.params['subsId'].value;
  var body = req.swagger.params['body'].value;
  Default.replaceIndividualPolicyDataSubscription(subsId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.replaceOperatorSpecificData = function replaceOperatorSpecificData (req, res, next) {
  var body = req.swagger.params['body'].value;
  var ueId = req.swagger.params['ueId'].value;
  Default.replaceOperatorSpecificData(body,ueId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateOperatorSpecificData = function updateOperatorSpecificData (req, res, next) {
  var body = req.swagger.params['body'].value;
  var ueId = req.swagger.params['ueId'].value;
  Default.updateOperatorSpecificData(body,ueId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSessionManagementPolicyData = function updateSessionManagementPolicyData (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var body = req.swagger.params['body'].value;
  Default.updateSessionManagementPolicyData(ueId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUEPolicySet = function updateUEPolicySet (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var body = req.swagger.params['body'].value;
  Default.updateUEPolicySet(ueId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
