import { SimpleMemberInfo } from "@/types/member";

interface MemberListProps {
  members: SimpleMemberInfo[];
  blur?: boolean;
}

const MemberList = ({ members, blur = false }: MemberListProps) => {
  return (
    <div
      className={`grid w-full auto-cols-auto grid-cols-2 justify-items-center gap-x-4 md:grid-cols-3 lg:grid-cols-4 ${
        blur ? "blur-md" : ""
      }`}
    >
      {members.map((member) => (
        <MemberListItem key={member.memberId} name={member.name} />
      ))}
    </div>
  );
};

const MemberListItem = ({ name }: Omit<SimpleMemberInfo, "memberId">) => {
  return (
    <div className="grid w-fit grid-cols-1 justify-items-center px-4 py-6 text-lg">
      <span>{name}</span>
    </div>
  );
};

export default MemberList;
