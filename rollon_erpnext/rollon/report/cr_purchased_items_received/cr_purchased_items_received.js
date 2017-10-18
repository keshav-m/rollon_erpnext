frappe.query_reports["CR Purchased Items Received"] = {
  "filters" : [
      {
       "fieldname":"from_date",
       "label":("From date"),
       "fieldtype":"Date",
       "default":frappe.datetime.month_start(date)
      },
      {
       "fieldname":"to_date",
       "label":("To date"),
       "fieldtype":"Date",
       "default":get_today()
      },
      {
       "fieldname":"item_group",
       "label":("Received Item Group"),
       "fieldtype":"Select",
       "options": ["Raw Material","SFG","Sub-contract","Finished Goods"],
       "default":"Raw Material"
      },
      {
       "fieldname":"details",
       "label":("Details type"),
       "fieldtype":"Select",
       "options": ["Collective Details","Transaction wise Details"],
       "default":"Collective Details"
      }
   ]
}
