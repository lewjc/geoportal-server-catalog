define({
  root: ({

    documentTypes: {
      data: {
        caption: "INSPIRE (Data)",
        description: ""
      },
      service: {
        caption: "INSPIRE (Service)",
        description: ""
      },
      data_v2: {
        caption: "INSPIRE 2.0 (Data)",
        description: ""
      },
      service_v2: {
        caption: "INSPIRE 2.0 (Service)",
        description: ""
      }
    },

    dataThemeKeywords: {
      caption: "Inspire Data Theme"
    },

    inspireServiceType: {
      discovery: "Discovery Service",
      view: "View Service",
      download: "Download Service",
      transformation: "Transformation Service",
      invoke: "Invoke Service",
      other: "Other Service"
    },

    keywordSections: {
      dataTheme: "Inspire Data Theme",
      serviceCategory: "ISO 19119 Service Category",
      gemetConcept: "GEMET Concept",
      otherKeywords: "Other Keywords"
    },

    LanguageCode: {
      bul: "Bulgarian",
      cze: "Czech",
      dan: "Danish",
      dut: "Dutch",
      eng: "English",
      est: "Estonian",
      fin: "Finnish",
      fre: "French",
      ger: "German",
      gre: "Greek",
      hun: "Hungarian",
      gle: "Gaelic (Irish)",
      ita: "Italian",
      lav: "Latvian",
      lit: "Lithuanian",
      mlt: "Maltese",
      pol: "Polish",
      por: "Portuguese",
      rum: "Romanian",
      slo: "Slovak",
      slv: "Slovenian",
      spa: "Spanish",
      swe: "Swedish",

      chi: "Chinese",
      kor: "Korean",
      nor: "Norwegian",
      rus: "Russian",
      tur: "Turkish"
    },

    otherConstraints: {
      noLimitations: "No limitations",
      confidentialityOfProceedings: "The confidentiality of the proceedings of public authorities...",
      internationalRelations: "International relations, public security or national defence",
      courseOfJustice: "The course of justice, the ability of any person to receive a fair trial...",
      confidentialityOfCommercial: "The confidentiality of commercial or industrial information...",
      intellectualProperty: "Intellectual property rights",
      confidentialityOfPersonalData: "The confidentiality of personal data and/or files...",
      interestsOrProtection: "The interests or protection of any person who supplied the information...",
      protectionOfEnvironment: "The protection of the environment to which such information relates...",
      freeText: "Free text"
    },
    
    useConstraints: {
      otherConstraints: {
        conditionsUnknown: "Conditions to access and use unknown",
        noConditions: "No conditions to access and use"
      }
    },
    
    accessConstraints: {
      otherConstraints: {
        noLimitations: "No limitations to public access",
        limited1a: "Public access limited according to Article 13(1)(a) of the INSPIRE Directive",
        limited1b: "Public access limited according to Article 13(1)(b) of the INSPIRE Directive",
        limited1c: "Public access limited according to Article 13(1)(c) of the INSPIRE Directive",
        limited1d: "Public access limited according to Article 13(1)(d) of the INSPIRE Directive",
        limited1e: "Public access limited according to Article 13(1)(e) of the INSPIRE Directive",
        limited1f: "Public access limited according to Article 13(1)(f) of the INSPIRE Directive",
        limited1g: "Public access limited according to Article 13(1)(g) of the INSPIRE Directive",
        limited1h: "Public access limited according to Article 13(1)(h) of the INSPIRE Directive"
      }
    },

    serviceType: {
      humanInteractionService: "100 Geographic human interaction services",
      humanCatalogueViewer: "101 Catalogue viewer",
      humanGeographicViewer: "102 Geographic viewer",
      humanGeographicSpreadsheetViewer: "103 Geographic spreadsheet viewer",
      humanServiceEditor: "104 Service editor",
      humanChainDefinitionEditor: "105 Chain definition editor",
      humanWorkflowEnactmentManager: "106 Workflow enactment manager",
      humanGeographicFeatureEditor: "107 Geographic feature editor",
      humanGeographicSymbolEditor: "108 Geographic symbol editor ",
      humanFeatureGeneralizationEditor: "109 Feature generalisation editor",
      humanGeographicDataStructureViewer: "110 Geographic data-structure viewer",
      infoManagementService: "200 Geographic model/information management service",
      infoFeatureAccessService: "201 Feature access service",
      infoMapAccessService: "202 Map access service",
      infoCoverageAccessService: "203 Coverage access service",
      infoSensorDescriptionService: "204 Sensor description service",
      infoProductAccessService: "205 Product access service",
      infoFeatureTypeService: "206 Feature type service",
      infoCatalogueService: "207 Catalogue service",
      infoRegistryService: "208 Registry Service",
      infoGazetteerService: "209 Gazetteer service",
      infoOrderHandlingService: "210 Order handling service",
      infoStandingOrderService: "211 Standing order service",
      taskManagementService: "300 Geographic workflow/task management services",
      chainDefinitionService: "301 Chain definition service",
      workflowEnactmentService: "302 Workflow enactment service",
      subscriptionService: "303 Subscription service",
      spatialProcessingService: "400 Geographic processing services - spatial",
      spatialCoordinateConversionService: "401 Coordinate conversion service",
      spatialCoordinateTransformationService: "402 Coordinate transformation service",
      spatialCoverageVectorConversionService: "403 Coverage/vector conversion service",
      spatialImageCoordinateConversionService: "404 Image coordinate conversion service",
      spatialRectificationService: "405 Rectification service",
      spatialOrthorectificationService: "406 Orthorectification service",
      spatialSensorGeometryModelAdjustmentService: "407 Sensor geometry model adjustment service",
      spatialImageGeometryModelConversionService: "408 Image geometry model conversion service",
      spatialSubsettingService: "409 Subsetting service",
      spatialSamplingService: "410 Sampling service",
      spatialTilingChangeService: "411 Tiling change service",
      spatialDimensionMeasurementService: "412 Dimension measurement service",
      spatialFeatureManipulationService: "413 Feature manipulation services",
      spatialFeatureMatchingService: "414 Feature matching service",
      spatialFeatureGeneralizationService: "415 Feature generalisation service",
      spatialRouteDeterminationService: "416 Route determination service",
      spatialPositioningService: "417 Positioning service",
      spatialProximityAnalysisService: "418 Proximity analysis service",
      thematicProcessingService: "500 Geographic processing services - thematic",
      thematicGoparameterCalculationService: "501 Geoparameter calculation service",
      thematicClassificationService: "502 Thematic classification service",
      thematicFeatureGeneralizationService: "503 Feature generalisation service",
      thematicSubsettingService: "504 Subsetting service",
      thematicSpatialCountingService: "505 Spatial counting service",
      thematicChangeDetectionService: "506 Change detection service",
      thematicGeographicInformationExtractionService: "507 Geographic information extraction services",
      thematicImageProcessingService: "508 Image processing service",
      thematicReducedResolutionGenerationService: "509 Reduced resolution generation service",
      thematicImageManipulationService: "510 Image Manipulation Services",
      thematicImageUnderstandingService: "511 Image understanding services",
      thematicImageSynthesisService: "512 Image synthesis services",
      thematicMultibandImageManipulationService: "513 Multiband image manipulation",
      thematicObjectDetectionService: "514 Object detection service",
      thematicGeoparsingService: "515 Geoparsing service",
      thematicGeocodingService: "516 Geocoding service",
      temporalProcessingService: "600 Geographic processing services - temporal",
      temporalReferenceSystemTransformationService: "601 Temporal reference system transformation service",
      temporalSubsettingService: "602 Subsetting service",
      temporalSamplingService: "603 Sampling service",
      temporalProximityAnalysisService: "604 Temporal proximity analysis service",
      metadataProcessingService: "700 Geographic processing services - metadata",
      metadataStatisticalCalculationService: "701 Statistical calculation service",
      metadataGeographicAnnotationService: "702 Geographic annotation services",
      comService: "800 Geographic communication services",
      comEncodingService: "801 Encoding service",
      comTransferService: "802 Transfer service",
      comGeographicCompressionService: "803 Geographic compression service",
      comGeographicFormatConversionService: "804 Geographic format conversion service",
      comMessagingService: "805 Messaging service",
      comRemoteFileAndExecutableManagement: "806 Remote file and executable management"
    },

    useLimitation: {
      noCondition: "No conditions apply",
      unknownCondition: "Conditions unknown",
      freeText: "Free text"
    },
    
    validation: {
      fullDate: "The value must be a full date."
    },
    
    distributionInfo: {
      online: {
        description: "Description"
      }
    },
    
    dataQuality: {
      scope: {
        levelDescription: "Level descripton",
        scopeDescription: "Scope description",
        other: "Other"
      },
      
      conformanceReport: {
        freeText: "Free Text",
        officialTitle: "Official Title",
        conformanceClass: "Conformance Class",
        classess: {
          invokable: "Invokable",
          interoperable: "Interoperable",
          harmonised: "Harmonised"
        }
      },
      
      conceptualConsistency: {
        caption: "Conceptual Consistency",
        availability: "Availability Report",
        performance: "Performance Report",
        capacity: "Capacity Report"
      }
    }

  })
});
