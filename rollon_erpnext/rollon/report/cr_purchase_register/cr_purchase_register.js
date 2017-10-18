frappe.query_reports["CR Purchase Register"] = {
    "filters" : [
         {
             "fieldname":"from_date",
             "label":("From Date"),
             "fieldtype":"Date",
             "default":get_today(),
             "reqd":1
         },

         { 
             "fieldname":"to_date",
             "label":("To Date"),
             "fieldtype":"Date",
             "default":get_today(),
             "reqd":1
         },
         {
             "fieldname":"supplier",
             "label":("Supplier"),
             "fieldtype":"Link",
             "options":"Supplier"
//             "reqd": 1
//             "default": supplier=%(supplier)s
         },
         {
             "fieldname":"form_types",
             "label":("Form Type"),
             "fieldtype":"Select",
             "options":["","C-Form","H-Form"]
         }
    
     ]

 }
