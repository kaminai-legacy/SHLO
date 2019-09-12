const SECRETS_ACCESS = 'secretForAccess';
const SECRETS_REFRESH = 'secretForRefresh';
const SECRETS_MAIL = 'secretForMail';
const LIVE_TIME_ACCESS =  '15s';
const LIVE_TIME_REFRESH ='15d';
const LIVE_TIME_MAIL ='1d';
const ALGORITHM = 'HS256';
const OTHER_FIELDS=['password','createdAt','updatedAt','isBaned'];
const FILTER_TAGS=['typeOfIndustry', 'id','typeOfContest','hasWinner'];
const FILTER_TAGS_IN_NEED_CHANGED=['typeOfIndustry','typeOfContest'];
const ROLE_BUYER="BUYER";
const ROLE_CREATIVE="CREATIVE";
const ROLE_ADMIN="ADMIN";
const OWNER="OWNER";
const CREATE="create";
const CHANGE="change";
const WATCH="watch";
const ENTRIES="entries";
const CONTESTS="contests";


module.exports = {
  SECRETS_ACCESS,
  SECRETS_REFRESH,
  LIVE_TIME_ACCESS,
  LIVE_TIME_REFRESH,
  LIVE_TIME_MAIL,
  SECRETS_MAIL,
  ALGORITHM,
  OTHER_FIELDS,
  ROLE_BUYER,
  ROLE_CREATIVE,
  ROLE_ADMIN,
  OWNER,
  CREATE,
  CHANGE,
  WATCH,
  ENTRIES,
  CONTESTS,
  FILTER_TAGS,
  FILTER_TAGS_IN_NEED_CHANGED
};
