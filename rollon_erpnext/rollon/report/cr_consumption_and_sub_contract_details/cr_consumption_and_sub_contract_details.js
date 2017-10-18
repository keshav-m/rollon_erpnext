frappe.query_reports["CR Consumption and Sub-contract Details"] = {
   "filters" : [

      {
       "fieldname" : "from_date",
       "label" : ("From Date"),
       "fieldtype" : "Date",
       "default" : frappe.datetime.month_start(Date)
      },
      {
       "fieldname" : "to_date",
       "label" : ("To Date"),
       "fieldtype" : "Date",
       "default" : get_today()
      },
      {
       "fieldname" : "purpose",
       "label" : ("Purpose"),
       "fieldtype" : "Select",
       "options" : ["Manufacture","Subcontract","Material Transfer",
                    "Material Transfer for Manufacture","Material Issue",
                    "Material Receipt"],
       "default" : "Manufacture"
      },
      {
       "fieldname" : "item_group",
       "label" : ("Item Group for consumed or produced Item"),
       "fieldtype" : "Select",
       "options" : ["","Raw Material","Sub-contract","Sub Assemblies",
                    "Finished Goods"],
       "default" : "Raw Material"
       },
       {
        "fieldname":"type_of_details",
        "label":("Type of Details"),
        "fieldtype":"Select",
        "options":["Collective Details","Transaction wise Details"],
        "default":"Collective Details"
       }

   ]

}       
