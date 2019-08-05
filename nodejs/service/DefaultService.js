'use strict';


/**
 * Creates an BDT data resource associated with an BDT reference Id
 *
 * bdtReferenceId String 
 * body BdtData  (optional)
 * returns BdtData
 **/
exports.createIndividualBdtData = function(bdtReferenceId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nwAreaInfo" : {
    "ncgis" : [ {
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      },
      "nrCellId" : "nrCellId"
    }, {
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      },
      "nrCellId" : "nrCellId"
    } ],
    "tais" : [ {
      "tac" : "tac",
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      }
    }, {
      "tac" : "tac",
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      }
    } ],
    "gRanNodeIds" : [ {
      "gNbId" : {
        "bitLength" : 22,
        "gNBValue" : "gNBValue"
      },
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      },
      "n3IwfId" : "n3IwfId",
      "ngeNbId" : "ngeNbId"
    }, {
      "gNbId" : {
        "bitLength" : 22,
        "gNBValue" : "gNBValue"
      },
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      },
      "n3IwfId" : "n3IwfId",
      "ngeNbId" : "ngeNbId"
    } ],
    "ecgis" : [ {
      "eutraCellId" : "eutraCellId",
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      }
    }, {
      "eutraCellId" : "eutraCellId",
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      }
    } ]
  },
  "aspId" : "aspId",
  "numOfUes" : 0,
  "transPolicy" : {
    "maxBitRateDl" : "maxBitRateDl",
    "maxBitRateUl" : "maxBitRateUl",
    "ratingGroup" : 0,
    "transPolicyId" : 6,
    "recTimeInt" : {
      "startTime" : "startTime",
      "stopTime" : "stopTime"
    }
  },
  "volPerUe" : {
    "duration" : 0,
    "totalVolume" : 0,
    "downlinkVolume" : 0,
    "uplinkVolume" : 0
  },
  "bdtRefId" : "bdtRefId"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a subscription to receive notification of policy data changes
 *
 * body PolicyDataSubscription  (optional)
 * returns PolicyDataSubscription
 **/
exports.createIndividualPolicyDataSubscription = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "supportedFeatures" : "supportedFeatures",
  "notificationUri" : "notificationUri",
  "monitoredResourceUris" : [ "monitoredResourceUris", "monitoredResourceUris" ],
  "expiry" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create or modify the UE policy set data for a subscriber
 *
 * ueId VarUeId 
 * body UePolicySet  (optional)
 * returns UePolicySet
 **/
exports.createOrReplaceUEPolicySet = function(ueId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "uePolicySections" : {
    "key" : {
      "uePolicySectionInfo" : "",
      "upsi" : "upsi"
    }
  },
  "pei" : "pei",
  "osIds" : [ "046b6c7f-0b8a-43b9-b35d-6489e6daee91", "046b6c7f-0b8a-43b9-b35d-6489e6daee91" ],
  "subscCats" : [ "subscCats", "subscCats" ],
  "upsis" : [ "upsis", "upsis" ],
  "andspInd" : true,
  "allowedRouteSelDescs" : {
    "key" : {
      "servingPlmn" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      },
      "snssaiRouteSelDescs" : [ {
        "snssai" : {
          "sd" : "sd",
          "sst" : 20
        },
        "dnnRouteSelDescs" : [ {
          "pduSessTypes" : [ "", "" ],
          "dnn" : "dnn",
          "sscModes" : [ "", "" ]
        }, {
          "pduSessTypes" : [ "", "" ],
          "dnn" : "dnn",
          "sscModes" : [ "", "" ]
        } ]
      }, {
        "snssai" : {
          "sd" : "sd",
          "sst" : 20
        },
        "dnnRouteSelDescs" : [ {
          "pduSessTypes" : [ "", "" ],
          "dnn" : "dnn",
          "sscModes" : [ "", "" ]
        }, {
          "pduSessTypes" : [ "", "" ],
          "dnn" : "dnn",
          "sscModes" : [ "", "" ]
        } ]
      } ]
    }
  },
  "praInfos" : {
    "key" : {
      "ecgiList" : [ {
        "eutraCellId" : "eutraCellId",
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        }
      }, {
        "eutraCellId" : "eutraCellId",
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        }
      } ],
      "globalRanNodeIdList" : [ {
        "gNbId" : {
          "bitLength" : 22,
          "gNBValue" : "gNBValue"
        },
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        },
        "n3IwfId" : "n3IwfId",
        "ngeNbId" : "ngeNbId"
      }, {
        "gNbId" : {
          "bitLength" : 22,
          "gNBValue" : "gNBValue"
        },
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        },
        "n3IwfId" : "n3IwfId",
        "ngeNbId" : "ngeNbId"
      } ],
      "presenceState" : "",
      "praId" : "praId",
      "trackingAreaList" : [ {
        "tac" : "tac",
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        }
      }, {
        "tac" : "tac",
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        }
      } ],
      "ncgiList" : [ {
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        },
        "nrCellId" : "nrCellId"
      }, {
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        },
        "nrCellId" : "nrCellId"
      } ]
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a usage monitoring resource
 *
 * ueId VarUeId 
 * usageMonId String 
 * body UsageMonData  (optional)
 * returns UsageMonData
 **/
exports.createUsageMonitoringResource = function(ueId,usageMonId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "allowedUsage" : {
    "duration" : 0,
    "totalVolume" : 0,
    "downlinkVolume" : 0,
    "uplinkVolume" : 0
  },
  "limitId" : "limitId",
  "scopes" : {
    "key" : {
      "snssai" : {
        "sd" : "sd",
        "sst" : 20
      },
      "dnn" : [ "dnn", "dnn" ]
    }
  },
  "umLevel" : "",
  "resetTime" : {
    "period" : "",
    "maxNumPeriod" : 0
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes an BDT data resource associated with an BDT reference Id
 *
 * bdtReferenceId String 
 * no response value expected for this operation
 **/
exports.deleteIndividualBdtData = function(bdtReferenceId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete the individual Policy Data subscription
 *
 * subsId String 
 * no response value expected for this operation
 **/
exports.deleteIndividualPolicyDataSubscription = function(subsId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a usage monitoring resource
 *
 * ueId VarUeId 
 * usageMonId String 
 * no response value expected for this operation
 **/
exports.deleteUsageMonitoringInformation = function(ueId,usageMonId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieves the access and mobility policy data for a subscriber
 *
 * ueId VarUeId 
 * returns AmPolicyData
 **/
exports.readAccessAndMobilityPolicyData = function(ueId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "subscCats" : [ "subscCats", "subscCats" ],
  "praInfos" : {
    "key" : {
      "ecgiList" : [ {
        "eutraCellId" : "eutraCellId",
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        }
      }, {
        "eutraCellId" : "eutraCellId",
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        }
      } ],
      "globalRanNodeIdList" : [ {
        "gNbId" : {
          "bitLength" : 22,
          "gNBValue" : "gNBValue"
        },
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        },
        "n3IwfId" : "n3IwfId",
        "ngeNbId" : "ngeNbId"
      }, {
        "gNbId" : {
          "bitLength" : 22,
          "gNBValue" : "gNBValue"
        },
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        },
        "n3IwfId" : "n3IwfId",
        "ngeNbId" : "ngeNbId"
      } ],
      "presenceState" : "",
      "praId" : "praId",
      "trackingAreaList" : [ {
        "tac" : "tac",
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        }
      }, {
        "tac" : "tac",
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        }
      } ],
      "ncgiList" : [ {
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        },
        "nrCellId" : "nrCellId"
      }, {
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        },
        "nrCellId" : "nrCellId"
      } ]
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves the BDT data collection
 *
 * returns List
 **/
exports.readBdtData = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "nwAreaInfo" : {
    "ncgis" : [ {
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      },
      "nrCellId" : "nrCellId"
    }, {
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      },
      "nrCellId" : "nrCellId"
    } ],
    "tais" : [ {
      "tac" : "tac",
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      }
    }, {
      "tac" : "tac",
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      }
    } ],
    "gRanNodeIds" : [ {
      "gNbId" : {
        "bitLength" : 22,
        "gNBValue" : "gNBValue"
      },
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      },
      "n3IwfId" : "n3IwfId",
      "ngeNbId" : "ngeNbId"
    }, {
      "gNbId" : {
        "bitLength" : 22,
        "gNBValue" : "gNBValue"
      },
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      },
      "n3IwfId" : "n3IwfId",
      "ngeNbId" : "ngeNbId"
    } ],
    "ecgis" : [ {
      "eutraCellId" : "eutraCellId",
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      }
    }, {
      "eutraCellId" : "eutraCellId",
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      }
    } ]
  },
  "aspId" : "aspId",
  "numOfUes" : 0,
  "transPolicy" : {
    "maxBitRateDl" : "maxBitRateDl",
    "maxBitRateUl" : "maxBitRateUl",
    "ratingGroup" : 0,
    "transPolicyId" : 6,
    "recTimeInt" : {
      "startTime" : "startTime",
      "stopTime" : "stopTime"
    }
  },
  "volPerUe" : {
    "duration" : 0,
    "totalVolume" : 0,
    "downlinkVolume" : 0,
    "uplinkVolume" : 0
  },
  "bdtRefId" : "bdtRefId"
}, {
  "nwAreaInfo" : {
    "ncgis" : [ {
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      },
      "nrCellId" : "nrCellId"
    }, {
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      },
      "nrCellId" : "nrCellId"
    } ],
    "tais" : [ {
      "tac" : "tac",
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      }
    }, {
      "tac" : "tac",
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      }
    } ],
    "gRanNodeIds" : [ {
      "gNbId" : {
        "bitLength" : 22,
        "gNBValue" : "gNBValue"
      },
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      },
      "n3IwfId" : "n3IwfId",
      "ngeNbId" : "ngeNbId"
    }, {
      "gNbId" : {
        "bitLength" : 22,
        "gNBValue" : "gNBValue"
      },
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      },
      "n3IwfId" : "n3IwfId",
      "ngeNbId" : "ngeNbId"
    } ],
    "ecgis" : [ {
      "eutraCellId" : "eutraCellId",
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      }
    }, {
      "eutraCellId" : "eutraCellId",
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      }
    } ]
  },
  "aspId" : "aspId",
  "numOfUes" : 0,
  "transPolicy" : {
    "maxBitRateDl" : "maxBitRateDl",
    "maxBitRateUl" : "maxBitRateUl",
    "ratingGroup" : 0,
    "transPolicyId" : 6,
    "recTimeInt" : {
      "startTime" : "startTime",
      "stopTime" : "stopTime"
    }
  },
  "volPerUe" : {
    "duration" : 0,
    "totalVolume" : 0,
    "downlinkVolume" : 0,
    "uplinkVolume" : 0
  },
  "bdtRefId" : "bdtRefId"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves the BDT data information associated with a BDT reference Id
 *
 * bdtReferenceId String 
 * returns BdtData
 **/
exports.readIndividualBdtData = function(bdtReferenceId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nwAreaInfo" : {
    "ncgis" : [ {
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      },
      "nrCellId" : "nrCellId"
    }, {
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      },
      "nrCellId" : "nrCellId"
    } ],
    "tais" : [ {
      "tac" : "tac",
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      }
    }, {
      "tac" : "tac",
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      }
    } ],
    "gRanNodeIds" : [ {
      "gNbId" : {
        "bitLength" : 22,
        "gNBValue" : "gNBValue"
      },
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      },
      "n3IwfId" : "n3IwfId",
      "ngeNbId" : "ngeNbId"
    }, {
      "gNbId" : {
        "bitLength" : 22,
        "gNBValue" : "gNBValue"
      },
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      },
      "n3IwfId" : "n3IwfId",
      "ngeNbId" : "ngeNbId"
    } ],
    "ecgis" : [ {
      "eutraCellId" : "eutraCellId",
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      }
    }, {
      "eutraCellId" : "eutraCellId",
      "plmnId" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      }
    } ]
  },
  "aspId" : "aspId",
  "numOfUes" : 0,
  "transPolicy" : {
    "maxBitRateDl" : "maxBitRateDl",
    "maxBitRateUl" : "maxBitRateUl",
    "ratingGroup" : 0,
    "transPolicyId" : 6,
    "recTimeInt" : {
      "startTime" : "startTime",
      "stopTime" : "stopTime"
    }
  },
  "volPerUe" : {
    "duration" : 0,
    "totalVolume" : 0,
    "downlinkVolume" : 0,
    "uplinkVolume" : 0
  },
  "bdtRefId" : "bdtRefId"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve the operator specific policy data of an UE
 *
 * ueId VarUeId UE Id
 * fields List attributes to be retrieved (optional)
 * returns Map
 **/
exports.readOperatorSpecificData = function(ueId,fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "key" : {
    "NumberTypeElements" : {
      "key" : 6.027456183070403
    },
    "IntegerTypeElements" : {
      "key" : 0
    },
    "StringTypeElements" : {
      "key" : "StringTypeElements"
    },
    "BooleanTypeElements" : {
      "key" : true
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve the UE policy set data for an H-PLMN
 *
 * plmnId VarPlmnId 
 * returns UePolicySet
 **/
exports.readPlmnUePolicySet = function(plmnId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "uePolicySections" : {
    "key" : {
      "uePolicySectionInfo" : "",
      "upsi" : "upsi"
    }
  },
  "pei" : "pei",
  "osIds" : [ "046b6c7f-0b8a-43b9-b35d-6489e6daee91", "046b6c7f-0b8a-43b9-b35d-6489e6daee91" ],
  "subscCats" : [ "subscCats", "subscCats" ],
  "upsis" : [ "upsis", "upsis" ],
  "andspInd" : true,
  "allowedRouteSelDescs" : {
    "key" : {
      "servingPlmn" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      },
      "snssaiRouteSelDescs" : [ {
        "snssai" : {
          "sd" : "sd",
          "sst" : 20
        },
        "dnnRouteSelDescs" : [ {
          "pduSessTypes" : [ "", "" ],
          "dnn" : "dnn",
          "sscModes" : [ "", "" ]
        }, {
          "pduSessTypes" : [ "", "" ],
          "dnn" : "dnn",
          "sscModes" : [ "", "" ]
        } ]
      }, {
        "snssai" : {
          "sd" : "sd",
          "sst" : 20
        },
        "dnnRouteSelDescs" : [ {
          "pduSessTypes" : [ "", "" ],
          "dnn" : "dnn",
          "sscModes" : [ "", "" ]
        }, {
          "pduSessTypes" : [ "", "" ],
          "dnn" : "dnn",
          "sscModes" : [ "", "" ]
        } ]
      } ]
    }
  },
  "praInfos" : {
    "key" : {
      "ecgiList" : [ {
        "eutraCellId" : "eutraCellId",
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        }
      }, {
        "eutraCellId" : "eutraCellId",
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        }
      } ],
      "globalRanNodeIdList" : [ {
        "gNbId" : {
          "bitLength" : 22,
          "gNBValue" : "gNBValue"
        },
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        },
        "n3IwfId" : "n3IwfId",
        "ngeNbId" : "ngeNbId"
      }, {
        "gNbId" : {
          "bitLength" : 22,
          "gNBValue" : "gNBValue"
        },
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        },
        "n3IwfId" : "n3IwfId",
        "ngeNbId" : "ngeNbId"
      } ],
      "presenceState" : "",
      "praId" : "praId",
      "trackingAreaList" : [ {
        "tac" : "tac",
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        }
      }, {
        "tac" : "tac",
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        }
      } ],
      "ncgiList" : [ {
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        },
        "nrCellId" : "nrCellId"
      }, {
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        },
        "nrCellId" : "nrCellId"
      } ]
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves the session management policy data for a subscriber
 *
 * ueId VarUeId 
 * returns SmPolicyData
 **/
exports.readSessionManagementPolicyData = function(ueId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "umData" : {
    "key" : {
      "allowedUsage" : {
        "duration" : 0,
        "totalVolume" : 0,
        "downlinkVolume" : 0,
        "uplinkVolume" : 0
      },
      "limitId" : "limitId",
      "scopes" : {
        "key" : {
          "snssai" : {
            "sd" : "sd",
            "sst" : 20
          },
          "dnn" : [ "dnn", "dnn" ]
        }
      },
      "umLevel" : "",
      "resetTime" : {
        "period" : "",
        "maxNumPeriod" : 0
      }
    }
  },
  "umDataLimits" : {
    "key" : {
      "resetPeriod" : "2000-01-23T04:56:07.000+00:00",
      "endDate" : "2000-01-23T04:56:07.000+00:00",
      "usageLimit" : {
        "duration" : 0,
        "totalVolume" : 0,
        "downlinkVolume" : 0,
        "uplinkVolume" : 0
      },
      "limitId" : "limitId",
      "scopes" : {
        "key" : {
          "snssai" : {
            "sd" : "sd",
            "sst" : 20
          },
          "dnn" : [ "dnn", "dnn" ]
        }
      },
      "umLevel" : "",
      "startDate" : "2000-01-23T04:56:07.000+00:00"
    }
  },
  "smPolicySnssaiData" : {
    "key" : {
      "smPolicyDnnData" : {
        "key" : {
          "adcSupport" : true,
          "dnn" : "dnn",
          "ipv4Index" : 0,
          "gbrDl" : "gbrDl",
          "subscSpendingLimits" : true,
          "chfInfo" : {
            "secondaryChfAddress" : "secondaryChfAddress",
            "primaryChfAddress" : "primaryChfAddress"
          },
          "praInfos" : {
            "key" : {
              "ecgiList" : [ {
                "eutraCellId" : "eutraCellId",
                "plmnId" : {
                  "mnc" : "mnc",
                  "mcc" : "mcc"
                }
              }, {
                "eutraCellId" : "eutraCellId",
                "plmnId" : {
                  "mnc" : "mnc",
                  "mcc" : "mcc"
                }
              } ],
              "globalRanNodeIdList" : [ {
                "gNbId" : {
                  "bitLength" : 22,
                  "gNBValue" : "gNBValue"
                },
                "plmnId" : {
                  "mnc" : "mnc",
                  "mcc" : "mcc"
                },
                "n3IwfId" : "n3IwfId",
                "ngeNbId" : "ngeNbId"
              }, {
                "gNbId" : {
                  "bitLength" : 22,
                  "gNBValue" : "gNBValue"
                },
                "plmnId" : {
                  "mnc" : "mnc",
                  "mcc" : "mcc"
                },
                "n3IwfId" : "n3IwfId",
                "ngeNbId" : "ngeNbId"
              } ],
              "presenceState" : "",
              "praId" : "praId",
              "trackingAreaList" : [ {
                "tac" : "tac",
                "plmnId" : {
                  "mnc" : "mnc",
                  "mcc" : "mcc"
                }
              }, {
                "tac" : "tac",
                "plmnId" : {
                  "mnc" : "mnc",
                  "mcc" : "mcc"
                }
              } ],
              "ncgiList" : [ {
                "plmnId" : {
                  "mnc" : "mnc",
                  "mcc" : "mcc"
                },
                "nrCellId" : "nrCellId"
              }, {
                "plmnId" : {
                  "mnc" : "mnc",
                  "mcc" : "mcc"
                },
                "nrCellId" : "nrCellId"
              } ]
            }
          },
          "refUmDataLimitIds" : {
            "key" : {
              "monkey" : [ "monkey", "monkey" ],
              "limitId" : "limitId"
            }
          },
          "offline" : true,
          "allowedServices" : [ "allowedServices", "allowedServices" ],
          "mpsPriority" : true,
          "imsSignallingPrio" : true,
          "subscCats" : [ "subscCats", "subscCats" ],
          "gbrUl" : "gbrUl",
          "ipv6Index" : 6,
          "online" : true,
          "mpsPriorityLevel" : 1
        }
      },
      "snssai" : {
        "sd" : "sd",
        "sst" : 20
      }
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves the sponsored connectivity information for a given sponsorId
 *
 * sponsorId String 
 * returns SponsorConnectivityData
 **/
exports.readSponsorConnectivityData = function(sponsorId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "aspIds" : [ "aspIds", "aspIds" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves the UE policy set data for a subscriber
 *
 * ueId VarUeId 
 * returns UePolicySet
 **/
exports.readUEPolicySet = function(ueId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "uePolicySections" : {
    "key" : {
      "uePolicySectionInfo" : "",
      "upsi" : "upsi"
    }
  },
  "pei" : "pei",
  "osIds" : [ "046b6c7f-0b8a-43b9-b35d-6489e6daee91", "046b6c7f-0b8a-43b9-b35d-6489e6daee91" ],
  "subscCats" : [ "subscCats", "subscCats" ],
  "upsis" : [ "upsis", "upsis" ],
  "andspInd" : true,
  "allowedRouteSelDescs" : {
    "key" : {
      "servingPlmn" : {
        "mnc" : "mnc",
        "mcc" : "mcc"
      },
      "snssaiRouteSelDescs" : [ {
        "snssai" : {
          "sd" : "sd",
          "sst" : 20
        },
        "dnnRouteSelDescs" : [ {
          "pduSessTypes" : [ "", "" ],
          "dnn" : "dnn",
          "sscModes" : [ "", "" ]
        }, {
          "pduSessTypes" : [ "", "" ],
          "dnn" : "dnn",
          "sscModes" : [ "", "" ]
        } ]
      }, {
        "snssai" : {
          "sd" : "sd",
          "sst" : 20
        },
        "dnnRouteSelDescs" : [ {
          "pduSessTypes" : [ "", "" ],
          "dnn" : "dnn",
          "sscModes" : [ "", "" ]
        }, {
          "pduSessTypes" : [ "", "" ],
          "dnn" : "dnn",
          "sscModes" : [ "", "" ]
        } ]
      } ]
    }
  },
  "praInfos" : {
    "key" : {
      "ecgiList" : [ {
        "eutraCellId" : "eutraCellId",
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        }
      }, {
        "eutraCellId" : "eutraCellId",
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        }
      } ],
      "globalRanNodeIdList" : [ {
        "gNbId" : {
          "bitLength" : 22,
          "gNBValue" : "gNBValue"
        },
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        },
        "n3IwfId" : "n3IwfId",
        "ngeNbId" : "ngeNbId"
      }, {
        "gNbId" : {
          "bitLength" : 22,
          "gNBValue" : "gNBValue"
        },
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        },
        "n3IwfId" : "n3IwfId",
        "ngeNbId" : "ngeNbId"
      } ],
      "presenceState" : "",
      "praId" : "praId",
      "trackingAreaList" : [ {
        "tac" : "tac",
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        }
      }, {
        "tac" : "tac",
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        }
      } ],
      "ncgiList" : [ {
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        },
        "nrCellId" : "nrCellId"
      }, {
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        },
        "nrCellId" : "nrCellId"
      } ]
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a usage monitoring resource
 *
 * ueId VarUeId 
 * usageMonId String 
 * returns UsageMonData
 **/
exports.readUsageMonitoringInformation = function(ueId,usageMonId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "allowedUsage" : {
    "duration" : 0,
    "totalVolume" : 0,
    "downlinkVolume" : 0,
    "uplinkVolume" : 0
  },
  "limitId" : "limitId",
  "scopes" : {
    "key" : {
      "snssai" : {
        "sd" : "sd",
        "sst" : 20
      },
      "dnn" : [ "dnn", "dnn" ]
    }
  },
  "umLevel" : "",
  "resetTime" : {
    "period" : "",
    "maxNumPeriod" : 0
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify a subscription to receive notification of policy data changes
 *
 * subsId String 
 * body PolicyDataSubscription  (optional)
 * returns PolicyDataSubscription
 **/
exports.replaceIndividualPolicyDataSubscription = function(subsId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "supportedFeatures" : "supportedFeatures",
  "notificationUri" : "notificationUri",
  "monitoredResourceUris" : [ "monitoredResourceUris", "monitoredResourceUris" ],
  "expiry" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify the operator specific policy data of an UE
 *
 * body Map 
 * ueId VarUeId UE Id
 * returns Map
 **/
exports.replaceOperatorSpecificData = function(body,ueId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "key" : {
    "NumberTypeElements" : {
      "key" : 6.027456183070403
    },
    "IntegerTypeElements" : {
      "key" : 0
    },
    "StringTypeElements" : {
      "key" : "StringTypeElements"
    },
    "BooleanTypeElements" : {
      "key" : true
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify the operator specific policy data of an UE
 *
 * body List 
 * ueId VarUeId UE Id
 * no response value expected for this operation
 **/
exports.updateOperatorSpecificData = function(body,ueId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Modify the session management policy data for a subscriber
 *
 * ueId VarUeId 
 * body Map  (optional)
 * no response value expected for this operation
 **/
exports.updateSessionManagementPolicyData = function(ueId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Modify the UE policy set data for a subscriber
 *
 * ueId VarUeId 
 * body UePolicySetPatch  (optional)
 * no response value expected for this operation
 **/
exports.updateUEPolicySet = function(ueId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

