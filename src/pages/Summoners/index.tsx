import React, { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import MainLayout from '@layouts/MainLayout';
import {
	Header,
	Profile,
	Input,
	Container,
	LeftSide,
	History,
	Lank,
	FreeLank,
	WinningRate,
	Total,
	TotalHeader,
	MatchWrapper,
	MatchItem,
	ProfileBorder,
	ProfileImage,
	LevelBox,
	PreviousTiers,
	TierItem,
	Strong,
	SummonerName,
	RadderRank,
	SummonerWrapper,
	LankSymbol,
	LankInfo,
	LankName,
	TierRank,
	Lp,
	WinLoosses,
	Late,
} from '@pages/Summoners/styles';

import { SummonerProps, TierRankType } from './types';

const Summoners = () => {
	const [name, setName] = useState('소환사');
	const [user, setUser] = useState<SummonerProps>();
	const [loading, setLoading] = useState(false);
	// const navigate = useNavigate();

	const getUser = async () => {
		try {
			setUser(Object);
			setLoading(true);

			if (name) {
				const response = await axios.get(`/summoner/${name}`, {
					withCredentials: true, // 쿠키 cors 통신 설정
				});
				setUser(response.data.summoner);
				console.log(response.data.summoner);
			} else {
				console.log('검색어가 없습니다.');
			}
		} catch (e) {
			console.error(e);
		}
		setLoading(false);
	};

	const handleSearch = (e: any) => {
		e.preventDefault();
		getUser();
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		console.log(e.target.value);
		setName(e.target.value);
	};

	const getCustomTier = (tierRank: TierRankType) => {
		const customTier = tierRank.tier + ' ' + tierRank.shortString.substring(1);

		return customTier;
	};

	const getLate = (wins: number, losses: number) => {
		const late = Math.floor((wins / (wins + losses)) * 100);

		return late;
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<Suspense>
			<MainLayout>
				<Header>
					<Container>
						<form onSubmit={handleSearch}>
							<Input name="name" value={name} placeholder="소환사명,챔피언..." onChange={onChange} />
						</form>
					</Container>
				</Header>
				<Profile>
					<Container>
						<PreviousTiers>
							{user &&
								user?.previousTiers?.map(({ season, tier }) => (
									<TierItem key={season}>
										<Strong>S{season}</Strong> {tier}
									</TierItem>
								))}
						</PreviousTiers>

						<ProfileBorder src={user?.profileBorderImageUrl}>
							<ProfileImage src={user?.profileImageUrl} />
							<LevelBox>{user?.level}</LevelBox>
						</ProfileBorder>
						<SummonerWrapper>
							<SummonerName>{user?.name}</SummonerName>
							<RadderRank>
								레더랭킹 <Strong>{user?.ladderRank?.rank}</Strong>위 (상위 {user?.ladderRank?.rankPercentOfTop}%)
							</RadderRank>
						</SummonerWrapper>
					</Container>
				</Profile>
				<Container>
					<LeftSide>
						{user?.leagues?.map(({ hasResults, wins, losses, tierRank }) => (
							<Lank key={tierRank.name}>
								<LankSymbol src={tierRank.imageUrl} />
								<LankInfo>
									<LankName>{tierRank.name}</LankName>
									<TierRank>{getCustomTier(tierRank)}</TierRank>
									<Lp>
										{tierRank.lp} LP
										<WinLoosses>
											{' '}
											/ {wins}승 {losses}패
										</WinLoosses>
									</Lp>
									<WinLoosses>{getLate(wins, losses)}%</WinLoosses>
									<Late></Late>
								</LankInfo>
							</Lank>
						))}

						<FreeLank>freelank</FreeLank>
						<WinningRate>승률</WinningRate>
					</LeftSide>
					<History>
						<TotalHeader>
							<span>전체</span>
							<span>솔로 랭크</span>
							<span>자유랭크</span>
						</TotalHeader>
						<Total>통계</Total>
						<MatchWrapper>
							<MatchItem>기록</MatchItem>
							<MatchItem>기록</MatchItem>
							<MatchItem>기록</MatchItem>
							<MatchItem>기록</MatchItem>
						</MatchWrapper>
					</History>
				</Container>
			</MainLayout>
		</Suspense>
	);
};

export default Summoners;
