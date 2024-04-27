import PropTypes from "prop-types";
import "./UntilLimit.scss";
export const UntilLimit = ({ limit }) => {
  function calcLimitDate() {
    // 現時刻と期限時刻
    const nowDate = new Date();
    const limitDate = new Date(limit);
    // 期限時刻がUTC時間になっているため日本時刻へ変換(-9時間)
    limitDate.setHours(limitDate.getHours() - 9);
    // s,m,h時間での合計
    const totalSecDateValue = parseInt((limitDate - nowDate) / 1000); // 秒
    const totalMinDate = totalSecDateValue / 60; // 分
    const totalHourDate = totalMinDate / 60;
    const totalDayDate = totalHourDate / 24;
    // 表示する時間(余り)
    const showMinDate = totalMinDate % 60; // 残り:分
    const showHourDate = totalHourDate % 24; // 残り:時
    // 小数点以下切り捨て|分の表示のみ、0分になってしまうため+1分
    return (
      parseInt(totalDayDate) +
      "日と" +
      parseInt(showHourDate) +
      "時間" +
      (parseInt(showMinDate) + 1) +
      "分"
    );
  }

  return (
    <>
      <span className="limit-date">残り時間:{calcLimitDate()}</span>
    </>
  );
};
UntilLimit.propTypes = {
  limit: PropTypes.string.isRequired,
};
