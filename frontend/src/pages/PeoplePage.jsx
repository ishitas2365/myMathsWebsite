import PeopleCard from "../components/PeopleCard";
import faculty from '../assets/images/faculty.png'
import formerFaculty from '../assets/images/formerFaculty.png'
import iitLogo from '../assets/images/iiti-logo.png';
import phdStudents from '../assets/images/phdStudents.png'
import mscStudents from '../assets/images/mscStudents.png'
import btechStudents from '../assets/images/btechStudents.jpg'
import postDoc from '../assets/images/postDoc.png'
import alumni from '../assets/images/alumni.png'

const PeoplePage = () => {
  return (
    <div className="max-w-[75vw] m-auto my-12">
      <div className="text-4xl font-bold text-center text-black mb-6 inline-block border-b-4 border-[#4c83bb] pb-4">
        PEOPLE
      </div>
      <div className="grid gap-6  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <PeopleCard navigateto='faculty' designation='Faculty' number={20} imgSrc={faculty}/>
        <PeopleCard navigateto='former-hod-and-faculty' designation='Former HoD and Faculty' number={11} imgSrc={formerFaculty}/>
        <PeopleCard navigateto='staff-and-committess' designation='Staff and Committees' number={2} imgSrc={iitLogo}/>
        <PeopleCard navigateto='phd-students' designation='Ph.D. Students' number={47} imgSrc={phdStudents}/>
        <PeopleCard navigateto='msc-students' designation='M.Sc. Students' number={38} imgSrc={mscStudents}/>
        <PeopleCard navigateto='btech-students' designation='B.Tech Students' number={110} imgSrc={btechStudents}/>
        <PeopleCard navigateto='research-staff-and-post-doc' designation='Research Staff and Post Doc' number={2} imgSrc={postDoc}/>
        <PeopleCard navigateto='alumni' designation='Alumni' number={102} imgSrc={alumni}/>
      </div>
    </div>
  );
};

export default PeoplePage;
