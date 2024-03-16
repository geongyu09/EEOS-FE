"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import TeamBuildingInfo from "@/components/teamBuildingDetail/teamBuilding/TeamBuildingInfo";
import UserInputModalContainer from "@/components/teamBuildingDetail/userInputModal/UserInputModal.container";
import ERROR_CODE from "@/constants/ERROR_CODE";
import ERROR_MESSAGE from "@/constants/ERROR_MESSAGE";
import ROUTES from "@/constants/ROUTES";
import { useGetIsTeamBuildingJoinable } from "@/features/teamBuilding";

const TeamBuildingDetailPage = () => {
  const router = useRouter();
  const { data: joinable, isLoading } = useGetIsTeamBuildingJoinable(true);

  if (isLoading) return <LoadingSpinner />;
  if (joinable.status === "nonjoinable") {
    toast.error(ERROR_MESSAGE[ERROR_CODE.TEAM_BUILDING.NOT_JOINABLE].message, {
      toastId: ERROR_CODE.TEAM_BUILDING.NOT_JOINABLE,
    });
    router.push(ROUTES.MAIN);
  }

  return (
    <div className="mb-16 space-y-16">
      <TeamBuildingInfo />
      {/* <InputStatusInfoContainer /> */}
      <UserInputModalContainer />
    </div>
  );
};

export default TeamBuildingDetailPage;
