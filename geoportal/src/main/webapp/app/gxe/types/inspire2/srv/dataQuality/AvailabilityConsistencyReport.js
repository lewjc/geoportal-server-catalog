define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dojo/has",
        "dojo/dom-style",
        "../../base/Descriptor",
        "esri/dijit/metadata/form/Tabs",
        "esri/dijit/metadata/form/Element",
        "esri/dijit/metadata/form/InputText",
        "esri/dijit/metadata/form/InputTextArea",
        "esri/dijit/metadata/form/InputNumber",
        "esri/dijit/metadata/form/iso/AbstractObject",
        "esri/dijit/metadata/form/iso/GcoElement",
        "esri/dijit/metadata/form/iso/ObjectReference",
        "dojo/text!./templates/AvailabilityConsistencyReport.html"],
function(declare, lang, has, domStyle, Descriptor, Tabs, Element, InputText, InputTextArea, InputNumber, AbstractObject, GcoElement, ObjectReference,
  template) {

  var oThisClass = declare(Descriptor, {

    templateString : template,
    
    postCreate: function() {
      this.inherited(arguments)
      
      domStyle.set(this._nameOfMeasure.domNode, "display", "none")
      domStyle.set(this._valueUnit.domNode, "display", "none")
      domStyle.set(this._xs.domNode, "display", "none")
      domStyle.set(this._type.domNode, "display", "none")
    }

  });

  return oThisClass;
});