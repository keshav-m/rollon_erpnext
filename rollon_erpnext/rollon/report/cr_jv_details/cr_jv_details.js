frappe.query_reports["CR JV Details"] = {
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
      "fieldname":"voucher_type",
      "label":("Voucher Type"),
      "fieldtype":"Select",
      "options":["Journal Entry","Bank Entry","Cash Entry","Contra Entry",
                 "Debit Note","Credit Note","Write Off Entry","Opening Entry",
                 "Credit Card Entry","Excise Entry"],
      "default":"Bank Entry"
     }
  ]
}
