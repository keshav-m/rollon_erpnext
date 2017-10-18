// Copyright (c) 2016, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.query_reports["CR Production Order"] = {
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
                "fieldname":"production_item",
                "label":("Item"),
                "fieldtype":"Data"
              },

              {
                "fieldname":"item_group",
                "label":("Input Item Group"),
                "fieldtype":"Link",
                "options":"Item Group",
                "default":"Raw Material"
              },

              {
                "fieldname":"status",
                "label":("Status"),
                "fieldtype":"Select",
                "options":["Draft","In Process","Completed","Submitted","Stopped","Cancelled"],
                "default":"Completed"
              }

	]

}
