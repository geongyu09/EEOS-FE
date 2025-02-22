import AttendeeInfoContainer from "@/components/programDetail/attendee/AttendeeInfo.container";
import ProgramInfo from "@/components/programDetail/program/ProgramInfo";
import UserAttendModalContainer from "@/components/programDetail/userAttendModal/UserAttendModal.container";

interface ProgramDetailPageProps {
  params: {
    programId: string;
  };
}

const ProgramDetailPage = ({ params }: ProgramDetailPageProps) => {
  const { programId } = params;

  return (
    <div className="mb-16 space-y-16">
      <ProgramInfo programId={+programId} isLoggedIn />
      <AttendeeInfoContainer programId={+programId} isLoggedIn />
      <UserAttendModalContainer programId={+programId} isLoggedIn />
    </div>
  );
};
export default ProgramDetailPage;
