import Header from "../components/common/Header";
import Report from "../components/emergency/Report";

export default function HistoryDetailPage() {
  return (
    <>
      <Header title="히스토리" isBack />
      <div className="flex flex-col px-14 pt-6 pb-12 gap-7">
        <div className="flex flex-col gap-2.5 text-center">
          <div className="body-m-bold">2025 / 04 / 02 (수) 23:40</div>
          <div className="body-m">홍길동님의 낙상 기록</div>
        </div>
        <div className="w-full h-40 items-center justify-center flex">
          Streaming
        </div>
        <Report
          content=" 홍길동님의 기저질환과 여러 상황을 종합해 보았을 때, 심혈관 이상으로
          인한 급작스러운 의식 저하 가능성이 있습니다. 환자 상태를 즉시
          확인해주세요. 홍길동님의 기저질환과 여러 상황을 종합해 보았을 때,
          심혈관 이상으로 인한 급작스러운 의식 저하 가능성이 있습니다. 환자
          상태를 즉시 확인해주세요. 홍길동님의 기저질환과 여러 상황을 종합해
          보았을 때, 심혈관 이상으로 인한 급작스러운 의식 저하 가능성이
          있습니다. 환자 상태를 즉시 확인해주세요. 홍길동님의 기저질환과 여러
          상황을 종합해 보았을 때, 심혈관 이상으로 인한 급작스러운 의식 저하
          가능성이 있습니다. 환자 상태를 즉시 확인해주세요."
        />
        <div className="flex flex-row items-center">
          <div className="text-darkgray title">조치 방법 &gt;</div>
          <div className="text-alert title flex justify-end">119 이송</div>
        </div>
      </div>
    </>
  );
}
