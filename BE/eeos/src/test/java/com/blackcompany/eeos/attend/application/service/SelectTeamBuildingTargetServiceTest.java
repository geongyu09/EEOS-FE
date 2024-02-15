package com.blackcompany.eeos.attend.application.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.blackcompany.eeos.attend.application.dto.TargetMember;
import com.blackcompany.eeos.attend.application.model.converter.TeamBuildingTargetEntityConverter;
import com.blackcompany.eeos.attend.fixture.TargetMemberFixture;
import com.blackcompany.eeos.attend.persistence.TeamBuildingTargetRepository;
import com.blackcompany.eeos.member.application.model.converter.MemberEntityConverter;
import com.blackcompany.eeos.member.fixture.FakeMember;
import com.blackcompany.eeos.member.persistence.MemberRepository;
import com.blackcompany.eeos.teamBuilding.application.dto.TeamBuildingMember;
import java.util.List;
import java.util.stream.Collectors;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class SelectTeamBuildingTargetServiceTest {
	@Mock private TeamBuildingTargetRepository teamBuildingTargetRepository;
	@Spy private TeamBuildingTargetEntityConverter entityConverter;
	@Mock private MemberRepository memberRepository;
	@Spy private MemberEntityConverter memberEntityConverter;
	@InjectMocks private SelectTeamBuildingTargetService selectTeamBuildingTargetService;

	@Test
	@DisplayName("대상자를 전달받아 팀빌딩 대상자로 저장한다.")
	void save_team_building_target() {
		// given
		List<TeamBuildingMember> 수민_바다_팀빌딩_대상자 = TargetMemberFixture.수민_바다_팀빌딩_대상자();
		when(memberRepository.findMembersByIds(
						수민_바다_팀빌딩_대상자.stream().map(TargetMember::getMemberId).collect(Collectors.toList())))
				.thenReturn(FakeMember.am_수민_바다());

		// when
		selectTeamBuildingTargetService.save(1L, 수민_바다_팀빌딩_대상자);

		// then
		verify(teamBuildingTargetRepository).saveAll(anyList());
	}
}
