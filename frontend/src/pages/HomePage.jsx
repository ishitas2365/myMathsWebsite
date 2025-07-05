import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="body_Homepage">
      <div className="photos">
        <div className="main">
          <div className="welcome">
            <h1>Welcome to the Department of Mathematics</h1>
          </div>

          <div className="know_more">
            <a href="">KNOW MORE</a>
          </div>
        </div>
      </div>

      <div className="grid_display">
        <div className="section-wrapper section-row-1">
          <div className="about">
            <h1 className="about_dept">ABOUT THE DEPARTMENT</h1>
            <hr className="line" />

            <div className="about-content">
              <p>
                Since its inception in July 2009, the Department of Mathematics has evolved in several directions. The department presently offers M.Sc. and Ph. D. programs in Mathematics. In addition to these programs, the department teaches several Mathematics courses to the undergraduate and postgraduate students of various engineering and science departments. The department aims to focus on providing a comprehensive curriculum at undergraduate and postgraduate levels, relevant research and career opportunities in India and abroad. The department is starting B. Tech. program in Mathematics and Computing from 2023. This program is especially designed ...
              </p>
              <img src="../images/abt_dept.jpg" alt="" className="abt_dept_img" />
            </div>

            <div className="read_more">
              <a href="#">READ MORE</a>
            </div>
          </div>

          <div className="about">
            <h1 className="message_from_hod about_dept">MESSAGE FROM HOD</h1>
            <hr className="line" />

            <div className="message_from_hod_container">
              <img src="../images/sanjeev_iiti.jpg" alt="" className="sjsingh" />
              <p>
                Since its inception in July 2009, the Department of Mathematics has evolved in several directions. The department presently offers M.Sc. and Ph. D. programs in Mathematics. In addition to these programs, the department teaches several Mathematics courses to the undergraduate and postgraduate students of various engineering and science departments. The department aims to focus on providing a comprehensive curriculum at undergraduate and postgraduate levels, relevant research and career opportunities in India and abroad. The department is starting B. Tech. program in Mathematics and Computing from 2023. This program is especially designed ...
              </p>
            </div>
          </div>

          <div className="quick_links">
            <h1 className="quick_heading">QUICK LINKS</h1>
            <hr className="line" />
            <div className="quick_links_container">
              <ul>
                <li><a href="#">Timetable</a></li>
                <li><a href="#">Syllabus</a></li>
                <li><a href="#">Faculty Login</a></li>
                <li><a href="#">Research Areas</a></li>
                <li><a href="#">Research Areas</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Notices</a></li>
                <li><a href="#">Admissions</a></li>
                <li><a href="#">Student Portal</a></li>
                <li><a href="#">Student Portal</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section-wrapper section-row-2">
          <div className="about announcements_box">
            <h1 className="about_dept">ANNOUNCEMENTS</h1>
            <hr className="line" />
            <ul>
              <li><a href="#">New B.Tech program launched</a></li>
              <li><a href="#">PhD Admissions Open</a></li>
              <li><a href="#">Mid-Sem Exam Schedule Released</a></li>
              <li><a href="#">Convocation 2025 Notice</a></li>
            </ul>
            <div className="view-all-wrapper">
              <a href="/announcements" className="view-all-btn">View All</a>
            </div>
          </div>

          <div className="about news_box">
            <h1 className="about_dept">NEWS</h1>
            <hr className="line" />
            <ul>
              <li><a href="#">Prof. Sharma wins INSA award </a></li>
              <li><a href="#">Mathematics fest concluded</a></li>
              <li><a href="#">New faculty members joined</a></li>
              <li><a href="#">Workshop on Number Theory</a></li>
            </ul>
            <div className="view-all-wrapper">
              <a href="/news" className="view-all-btn">View More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-container">
        <div className="stat">
          <div className="count">45 +</div>
          <div className="label">Ph.D. Students</div>
        </div>
        <div className="stat">
          <div className="count">35 +</div>
          <div className="label">M.Sc. Students</div>
        </div>
        <div className="stat">
          <div className="count">19 +</div>
          <div className="label">Faculty</div>
        </div>
        <div className="stat">
          <div className="count">100 +</div>
          <div className="label">B.Tech. Students</div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
