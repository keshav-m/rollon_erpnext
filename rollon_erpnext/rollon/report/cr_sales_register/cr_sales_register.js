frappe.query_reports["CR Sales Register"] = {
    "filters":[
         {
           "fieldname":"from_date",
           "label":("From date"),
           "fieldtype":"Date",
           "default":frappe.datetime.month_start(date)
         },
 
         {
           "fieldname":"to_date",
           "label":("To Date"),
           "fieldtype":"Date",
           "default": get_today()
         },

         {
           "fieldname":"item_group",
           "label":("Item Group"),
           "fieldtype":"Link",
           "options":"Item Group",
           "default":"Finished Goods"
         }

     ]

 }
