import { NextPage } from "next";

const Profile: NextPage = () => {
  return (
    <div className="mt-20 flex w-3/4 flex-col justify-start px-8">
      <div className="mb-8 animate-track-in-animation text-5xl font-bold">
        About.
      </div>
      <div className="mb-8">
        <div className="mb-3 animate-track-in-animation text-3xl font-bold">
          Me
        </div>
        <ul className="mx-6 animate-track-in-animation-item list-disc">
          <li className="mb-3">
            <span>
              名前
              <br />
              前田　啓太
            </span>
          </li>
          <li className="mb-3">
            <span>
              生年月日
              <br />
              1996/7/15
            </span>
          </li>
          <li className="mb-3">
            <span>
              出身地
              <br />
              神戸
            </span>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <div className="mb-3 animate-track-in-animation text-3xl font-bold ">
          Hobby
        </div>
        <ul className="mx-6 animate-track-in-animation-item list-disc ">
          <li className="mb-3">
            <span>漫画</span>
          </li>
          <li className="mb-3">
            <span>映画鑑賞</span>
          </li>
          <li className="mb-3">
            <span>散歩</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
