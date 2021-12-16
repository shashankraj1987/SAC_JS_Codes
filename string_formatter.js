var lval1 = chart1.getDataSource().getResultSet().length;
var lval2 = chart2.getDataSource().getResultSet().length;
var val1 = 0;
var val2 = 0;

if (lval1 === 0) {
  val1 = 0;
} else {
  val1 = ConvertUtils.stringToInteger(
    chart1.getDataSource().getResultSet()[0][Alias.MeasureDimension].rawValue
  );
}

if (lval2 === 0) {
  val2 = 0;
} else {
  val2 = ConvertUtils.stringToInteger(
    chart2.getDataSource().getResultSet()[0][Alias.MeasureDimension].rawValue
  );
}

var val = "";
var i = 0;
var final = "";
var str = "";
var j = 0;
var chk = true;

if (val1 + val2 > 0) {
  val = (val1 + val2).toString();
  for (i = val.length - 1; i >= 0; i--) {
    console.log("Inside For Loop");
    str = val.substr(i, 1);
    console.log(["Value of Str is ", str]);
    if (j % 3 === 0 && j !== 0) {
      console.log("Inside if Condition");
      final = str.concat(",").concat(final);
      //final = final.concat(",").concat(str);
    } else {
      console.log("Inside Else Condition");
      //final = final.concat(str);
      final = str.concat(final);
    }
    j++;
  }
} else if (val1 + val2 < 0) {
  chk = false;
  val = ((val1 + val2) * -1).toString();
  for (i = val.length - 1; i >= 0; i--) {
    console.log("Inside For Loop");
    str = val.substr(i, 1);
    console.log(["Value of Str is ", str]);
    if (j % 3 === 0 && j !== 0) {
      console.log("Inside if Condition");
      final = str.concat(",").concat(final);
      //final = final.concat(",").concat(str);
    } else {
      console.log("Inside Else Condition");
      //final = final.concat(str);
      final = str.concat(final);
    }
    j++;
  }
} else if (val1 + val2 === 0) {
  final = "0";
}

if (chk) {
  return final;
} else {
  return "-".concat(final);
}
