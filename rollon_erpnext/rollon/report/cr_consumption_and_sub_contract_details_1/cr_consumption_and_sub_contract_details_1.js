frappe.query_reports["CR Consumption and Sub-contract Details-1"] = {
  "filters":[
     {
      "fieldname":"from_date",
      "label":("From Date"),
      "fieldtype":"Date",
      "default":frappe.datetime.month_start(date)
     },
     {
      "fieldname":"to_date",
      "label":("To Date"),
      "fieldtype":"Date",
      "default":get_today()
     },
     {
      "fieldname":"purpose",
      "label":("Purpose"),
      "fieldtype":"Select",
      "options":["Manufacture","Sub-contract","Material Transfer",
                 "Material Transfer for Manufacture","Material Issue",
                 "Material Receipt"],
      "default":"Manufacture"
     },
     {
      "fieldname":"item_group",
      "label":("Item Group"),
      "fieldtype":"Select",
      "options":["Raw Material","Finished Goods","Sub Assemblies"],
      "default":"Raw Material"
      }
   ]
}
