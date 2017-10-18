frappe.query_reports["CR Customers & Suppliers difference"] = {
  "filters": [
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
   "fieldname":"party",
   "label":("Party"),
   "fieldtype":"Dynamic Link",
   "options":"Party",
   "default":"Asquare"
  }
 ]
}
