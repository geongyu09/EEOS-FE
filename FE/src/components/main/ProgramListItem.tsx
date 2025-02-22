import { ProgramSimpleInfoDto } from "@/apis/dtos/program.dto";
import Link from "@/components/common/Link";
import ROUTES from "@/constants/ROUTES";
import { convertDate } from "@/utils/convert";

interface ProgramListItemProps {
  programData: ProgramSimpleInfoDto;
  isLoggedIn: boolean;
}

const ProgramListItem = ({ programData, isLoggedIn }: ProgramListItemProps) => {
  const { programId, title, deadLine } = programData;
  const lingUrl = isLoggedIn
    ? ROUTES.DETAIL(programId)
    : ROUTES.GUEST_DETAIL(programId);
  return (
    <Link
      className="flex w-full flex-col items-center justify-between gap-4 rounded-lg bg-gray-10 px-8 py-6 transition-all hover:bg-secondary-20 sm:flex-row"
      href={lingUrl}
      key={programId}
    >
      <p className="w-full truncate text-center text-lg font-bold sm:text-left">
        {title}
      </p>
      <p className="text-base font-normal sm:w-52">{convertDate(deadLine)}</p>
    </Link>
  );
};

export default ProgramListItem;
