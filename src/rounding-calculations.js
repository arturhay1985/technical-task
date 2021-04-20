const ROUNT_POINT_99 = 0.50;
const ROUNT_POINT_00 = 0.40;
const ROUNT_POINT_95 = 0.45;

const getRounfingResultFor99 = (differenceAfterPoint, roundingRule, value) => {
  return differenceAfterPoint < ROUNT_POINT_99
    ? Math.floor(value - 0.5) + roundingRule / 100
    : value.toFixed(2);
}

const getRounfingResultFor00 = (differenceAfterPoint, roundingRule, value) => {
  return differenceAfterPoint > ROUNT_POINT_00
    ? Math.ceil(value).toFixed(2)
    : Math.round(value).toFixed(2);
}

const getRounfingResultFor95 = (differenceAfterPoint, roundingRule, value) => {
  return differenceAfterPoint < ROUNT_POINT_95
    ? Math.floor(value - 0.5) + roundingRule / 100
    : Math.round(value).toFixed(2);
}

const mappedRoundingRules = {
  "99": getRounfingResultFor99,
  "00": getRounfingResultFor00,
  "95": getRounfingResultFor95,
};
