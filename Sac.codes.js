if (Number.parseInt(print_pdf) === 1) {
  ExportToPDF_1.setFileName("Reg_Japan_Dashboard");
  ExportToPDF_1.exportView();
}

console.log(["Today's Dats is ", Date.now()]);

//day_offset = -3;
var current_date = new Date(Date.now());
var date_filter = new Date(current_date.setDate(d_off));
var lm_days = 33;

console.log(current_date.getDate());
console.log(current_date.getUTCDate());
console.log(current_date.setDate(d_off));

var days_filter = TimeRange.create(
  TimeRangeGranularity.Day,
  date_filter,
  date_filter
);
console.log(["Current Date filters is ", days_filter]);

//Applying Filters for Current Month Charts
FTBO_CM_CR.getDataSource().setDimensionFilter("CC_CALDAY_DATE", days_filter);
PPI_CM_CR.getDataSource().setDimensionFilter("CC_CALDAY_DATE", days_filter);

//Applying Filter for Previous Month Charts

var date = new Date();
var last = new Date(date.getTime() - lm_days * 24 * 60 * 60 * 1000);

console.log(["Last Month's Value is ", last]);
var l_days_filter = TimeRange.create(TimeRangeGranularity.Day, last, last);
FTBO_LM_CR.getDataSource().setDimensionFilter("CC_CALDAY_DATE", l_days_filter);
PPI_LM_CR.getDataSource().setDimensionFilter("CC_CALDAY_DATE", l_days_filter);

// Test this later
var test_last = new Date();

if (d_off > 0) {
  test_last = new Date(date.getTime() - (d_off + 33) * 24 * 60 * 60 * 1000);
} else {
  test_last = new Date(date.getTime() - (d_off - 33) * 24 * 60 * 60 * 1000);
}

p_var;
d_off;

//paypal.us10.sapanalytics.cloud/sap/fpa/ui/tenants/a2a6a/app.html#;mode=present;view_id=appBuilding;appId=D15D02E9D25CE16F52705B1267FD1BEC;p_d_off=2

https: if (Number.parseInt(print_pdf) === 1) {
  ExportToPDF_1.setFileName("Reg_Japan_Dashboard");
  ExportToPDF_1.exportView();
}

/*
console.log(["Today's Dats is ",Date.now()]);
day_offset = -3;
var current_date = new Date(Date.now());
var date_filter = new Date(current_date.setDate(day_offset));
console.log(["Value of Dat Offset is ",day_offset]);
console.log(current_date.getDate());
console.log(current_date.getUTCDate());
console.log(current_date.setDate(day_offset));
var days_filter = TimeRange.create(TimeRangeGranularity.Day,date_filter,date_filter);
console.log(["Days filters is ",days_filter]);
Chart_2.getDataSource().setDimensionFilter("CC_CALDAY_DATE",days_filter);
*/

//----------------------
d_curr = 4;
var date = new Date();
var cm = new Date(date.getTime() - d_curr * 24 * 60 * 60 * 1000);
var lm = new Date(date.getTime() - (d_curr + 31) * 24 * 60 * 60 * 1000);
var cm_filter = TimeRange.create(TimeRangeGranularity.Day, cm, cm);
var lm_filter = TimeRange.create(TimeRangeGranularity.Day, lm, lm);

console.log(["Current Day filter is ", cm_filter]);
console.log(["Last Day filter is ", lm_filter]);

//Last Month Filters
FTBO_CM_CR.getDataSource().setDimensionFilter("CC_CALDAY_DATE", cm_filter);
PPI_CM_CR.getDataSource().setDimensionFilter("CC_CALDAY_DATE", cm_filter);

// Current Month Filter
FTBO_LM_CR.getDataSource().setDimensionFilter("CC_CALDAY_DATE", lm_filter);
PPI_LM_CR.getDataSource().setDimensionFilter("CC_CALDAY_DATE", lm_filter);

// Find Last Day of Data
var calday_members = TBL_TOT_CAP.getDataSource().getMembers(
  "CC_CALDAY_DATE",
  1000
);
last_day_date = calday_members[calday_members.length - 1].description;
console.log(last_day_date);

/* This Portion Converts the String date to System Readable Date.
var dp = Date.parse(last_day_date);
console.log(dp);
var dt = new Date(dp);
console.log(dt.toLocaleDateString());
console.log(dt.toDateString().substring(4));
*/

//Taking Care of Top Date Display
// Take the last day and Subtract the Row Length of Table from It.

var tbl_len = TBL_TOT_CAP.getRowCount();
console.log(tbl_len);

//---------------------------------------------------------------------------------------------------------------

//3PL Codes

if (Number.parseInt(print_pdf) === 1) {
  ExportToPDF_1.setFileName("Reg_3PL_Dashboard");
  ExportToPDF_1.exportView();
}

var date_offset = 0;
if (d_curr <= -1) {
  date_offset = 1;
} else {
  date_offset = d_curr;
}

//Applying Filter of 31 days - current Date in Table.
// Find First Day of Table

var calday_members = TBL_TOT_CAP.getDataSource().getMembers("CC_CALDAY", -40);
console.log(calday_members);
latest_date = calday_members[calday_members.length - 1].description;
console.log(["The Latest Date is ", latest_date]);

//converting the latest date to Date Format.

var dt_frmt = Date.parse(latest_date);
console.log(["Date in Date Format is ", dt_frmt]);

var dt_0 = new Date(dt_frmt);
var dt_31 = new Date(dt_frmt - (date_offset + 31) * 24 * 60 * 60 * 1000);

console.log(["Printing Days 31 from now ", dt_31]);
console.log(["Printing Days 0 from now ", dt_0]);

var tbl_filter = TimeRange.create(TimeRangeGranularity.Day, dt_31, dt_0);
var curr_fltr = TimeRange.create(TimeRangeGranularity.Day, dt_0, dt_0);
var prev_fltr = TimeRange.create(TimeRangeGranularity.Day, dt_31, dt_31);

HQLA_EOM_PM.getDataSource().setDimensionFilter("CC_CALDAY", prev_fltr);
HQLA_EOM_CM.getDataSource().setDimensionFilter("CC_CALDAY", curr_fltr);
COV_EOM_CM.getDataSource().setDimensionFilter("CC_CALDAY", curr_fltr);
COV_EOM_PM.getDataSource().setDimensionFilter("CC_CALDAY", prev_fltr);

// ------------  Getting the AVG HQLA, AVG Cov, Previous and Current Month ------------

// ######################################################################################

//console.log(TBL_TOT_CAP.getDataSource().getResultSet()[1]["CC_CALDAY"].description);

console.log(TBL_TOT_CAP.getDataSource().getResultSet());
//console.log(["Printing 240 val ",TBL_TOT_CAP.getDataSource().getResultSet()[220][Alias.MeasureDimension].rawValue]);

var j_hcurr = 3;
var j_ccurr = 6;
var j_hprev = 227;
var j_cprev = 230;
var avg_hqla_curr = 0.0;
var avg_hqla_prev = 0.0;
var avg_cov_curr = 0.0;
var avg_cov_prev = 0.0;
var tbl_rsltset = TBL_TOT_CAP.getDataSource().getResultSet();

console.log("Entering the for loop");
for (var i = 0; i < 32; i++) {
  //console.log(TBL_TOT_CAP.getDataSource().getResultSet()[j]["CC_CALDAY"].description);
  //curr_tbl_vals.push(Number.parseFloat(TBL_TOT_CAP.getDataSource().getResultSet()[j][Alias.MeasureDimension].rawValue));

  avg_hqla_curr =
    avg_hqla_curr +
    Number.parseFloat(tbl_rsltset[j_hcurr][Alias.MeasureDimension].rawValue);
  console.log(avg_hqla_curr);
  avg_cov_curr =
    avg_cov_curr +
    Number.parseFloat(tbl_rsltset[j_ccurr][Alias.MeasureDimension].rawValue);
  avg_hqla_prev =
    avg_hqla_prev +
    Number.parseFloat(tbl_rsltset[j_hprev][Alias.MeasureDimension].rawValue);

  avg_cov_prev =
    avg_cov_prev +
    Number.parseFloat(tbl_rsltset[j_cprev][Alias.MeasureDimension].rawValue);
  console.log([j_cprev, avg_cov_prev]);
  j_hcurr = j_hcurr + 7;
  j_ccurr = j_ccurr + 7;
  j_hprev = j_hprev + 7;
  j_cprev = j_cprev + 7;
}

console.log("Exiting the for loop");

Avg_HQLA_Curr = avg_hqla_curr / i;
Avg_Cov_Curr = avg_cov_curr / i;
Avg_HQLA_Prev = avg_hqla_prev / i;
Avg_Cov_Prev = avg_cov_prev / i;

bps_hqla_avg = (avg_hqla_curr / i - avg_hqla_prev / i) * 10000;
bps_cov_avg = (avg_cov_curr / i - avg_cov_prev / i) * 10000;

TXT_BPS_HQLA_Avg.applyText(bps_hqla_avg.toFixed(0));
TXT_BPS_COV_Avg.applyText(bps_cov_avg.toFixed(0));

console.log([avg_hqla_curr, Avg_Cov_Curr, Avg_HQLA_Prev, avg_cov_prev]);

var Curr_mnth = "Jan";
var prev_mnth = "Jan";

prev_date =
  prev_mnth +
  " " +
  dt_31.getDate().toString() +
  ", " +
  dt_31.getFullYear().toString();

TXT_PM1.applyText(prev_mnth + "-" + dt_31.getFullYear().toString());
TXT_CM1.applyText(Curr_mnth + "-" + dt_0.getFullYear().toString());
TXT_PM2.applyText(prev_mnth + "-" + dt_31.getFullYear().toString());
TXT_CM2.applyText(Curr_mnth + "-" + dt_0.getFullYear().toString());
TXT_PD1.applyText(prev_date);
TXT_PD2.applyText(prev_date);
TXT_ND1.applyText(latest_date);
TXT_ND2.applyText(latest_date);

// --------------- BPS ---------------
// --- HQLA EOM ---

var curr_val = 0.0;
var prev_val = 0.0;
var bps = 0.0;
console.log("Getting the BPS Data ");
curr_val = Number.parseFloat(
  HQLA_EOM_CM.getDataSource().getResultSet()[0][Alias.MeasureDimension].rawValue
);
console.log(curr_val);
prev_val = Number.parseFloat(
  HQLA_EOM_PM.getDataSource().getResultSet()[0][Alias.MeasureDimension].rawValue
);
console.log(prev_val);
bps = (curr_val - prev_val) * 10000;
console.log(bps);
TXT_BPS_HQLA_EOM.applyText(bps.toFixed(0));

// -- COV EOM --
curr_val = Number.parseFloat(
  COV_EOM_CM.getDataSource().getResultSet()[0][Alias.MeasureDimension].rawValue
);
console.log(curr_val);
prev_val = Number.parseFloat(
  COV_EOM_PM.getDataSource().getResultSet()[0][Alias.MeasureDimension].rawValue
);
console.log(prev_val);
bps = (curr_val - prev_val) * 10000;
console.log(bps);
TXT_BPS_COV_EOM.applyText(bps.toFixed(0));

// Adding Filter to the Tables.
TBL_TOT_CAP.getDataSource().setDimensionFilter("CC_CALDAY", tbl_filter);

/// Get the Values of a Variable
// ###############################################################################
var manager = Chart_1.getDataSource().getMembers("Sales_Manager__5w3m5d06b5");
var managerDiscountsRaw = ArrayUtils.create(Type.string);
var managerDiscountsFormatted = ArrayUtils.create(Type.string);
for (var i = 0; i < manager.length; i++) {
  var data = Chart_1.getDataSource().getData({
    Sales_Manager__5w3m5d06b5: manager[i].id,
    [Alias.MeasureDimension]: "[Account_BestRunJ_sold].[parentId].&[Discount]",
  });
  if (data.rawValue) {
    managerDiscountsRaw.push(data.rawValue);
  }
  if (data.formattedValue) {
    managerDiscountsFormatted.push(data.formattedValue);
  }
}
managerDiscountsRaw.sort();
managerDiscountsFormatted.sort();
console.log(managerDiscountsRaw);

console.log(managerDiscountsFormatted);
