 frappe.query_reports["CR Stock Entry Details"] = {
 "filters": [
  {
  "fieldname":"from_date",
  "label":("From Date"),
  "fieldtype":"Date",
  "default": get_today()
  },
  {
  "fieldname":"to_date",
  "label":("To Date"),
  "fieldtype":"Date",
  "default": get_today()
  },
  {
  "fieldname":"purpose",
  "label":("Purpose"),
  "fieldtype":"Select",
  "options":["Manufacture","Sub-contract","Material transfer",
             "Material Transferfor Manufacture","Material Receipt",    
             "Material Issue","Repack"],
  "default":"Manufacture"
  }
 ]
}
