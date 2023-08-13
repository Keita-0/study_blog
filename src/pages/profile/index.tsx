import { NextPage } from "next";

const Profile: NextPage = () => {
  return (
    <div className="mt-14 flex w-full flex-col justify-start md:mt-20 md:px-8 xl:w-10/12">
      <div className="mb-4 animate-track-in-animation text-3xl font-bold md:mb-8 md:text-5xl">
        About.
      </div>
      <div className="mb-2 md:mb-8">
        <div className="mb-2 animate-track-in-animation text-xl font-bold md:mb-3 md:text-3xl">
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
      <div className="mb-2 md:mb-8">
        <div className="mb-2 animate-track-in-animation text-xl font-bold md:mb-3 md:text-3xl">
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
