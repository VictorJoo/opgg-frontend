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
	TierRankName,
	Lp,
	WinLoosses,
	Late,
	ChampionBox,
	MostFace,
	MostInfoCell,
	MostInfoName,
	MostInfoCS,
	MostInfoKDA,
	MostInfoKDACell,
	MostInfoScore,
	MostInfoPlayed,
	PlayedPercent,
	PlayedCount,
	MostFaceImg,
} from '@pages/Summoners/styles';

import { Summoner, MostInfo, TierRank, MostChampions, RecentWinRate } from './types';

const Summoners = () => {
	const [name, setName] = useState('소환사');
	const [user, setUser] = useState<Summoner>();
	const [most, setMost] = useState<MostInfo>();
	const [loading, setLoading] = useState(false);
	// const navigate = useNavigate();

	//사용자 정보
	const getUser = async () => {
		try {
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

	//모스트
	const getMost = async () => {
		try {
			setLoading(true);

			if (name) {
				const response = await axios.get(`/summoner/${name}/mostInfo`, {
					withCredentials: true, // 쿠키 cors 통신 설정
				});
				console.log(22, response.data);
				//모스트 챔피언 정렬
				const sortCham = response.data.champions.sort((a: any, b: any) => {
					return b.games - a.games;
				});

				//중복제거
				const checkArray = sortCham.filter((character: MostChampions, idx: number, arr: any) => {
					return arr.findIndex((item: MostChampions) => item.key === character.key) === idx;
				});

				//최근7일 챔피언 정렬
				const sortCham2 = response.data.recentWinRate.sort((a: any, b: any) => {
					return b.games - a.games;
				});

				//중복제거
				const checkArray2 = sortCham2.filter((character: RecentWinRate, idx: number, arr: any) => {
					return arr.findIndex((item: RecentWinRate) => item.key === character.key) === idx;
				});

				setMost({ champions: checkArray, recentWinRate: checkArray2 });
			} else {
				console.log('모스트 정보가 없습니다.');
			}
		} catch (e) {
			console.error(e);
		}
		setLoading(false);
	};

	const handleSearch = (e: any) => {
		e.preventDefault();
		getUser();
		getMost();
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		console.log(e.target.value);
		setName(e.target.value);
	};

	const getCustomTier = (tierRank: TierRank) => {
		const customTier = tierRank.tier + ' ' + tierRank.shortString.substring(1);

		return customTier;
	};

	const getLate = (wins: number, losses: number) => {
		const late = Math.floor((wins / (wins + losses)) * 100);

		return late;
	};

	useEffect(() => {
		getUser();
		getMost();
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
									<TierRankName>{getCustomTier(tierRank)}</TierRankName>
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

						<FreeLank>
							<>
								<ul>
									<li>챔피언 승률</li>
									<li>7일간 랭크 승률</li>
								</ul>

								<div>
									{most?.champions?.map(({ ...MostChampions }) => (
										<ChampionBox key={MostChampions.key}>
											<MostFace>
												<MostFaceImg src={MostChampions.imageUrl} />
											</MostFace>
											<MostInfoCell>
												<MostInfoName>{MostChampions.name}</MostInfoName>
												<MostInfoCS>CS {MostChampions.cs}</MostInfoCS>
											</MostInfoCell>
											<MostInfoKDACell>
												<MostInfoScore>
													{((MostChampions.kills + MostChampions.assists) / MostChampions.deaths).toFixed(2)}:1 평점
												</MostInfoScore>
												<MostInfoKDA>
													{(MostChampions.kills / (MostChampions.wins + MostChampions.losses)).toFixed(1) +
														' / ' +
														(MostChampions.deaths / (MostChampions.wins + MostChampions.losses)).toFixed(1) +
														' / ' +
														(MostChampions.assists / (MostChampions.wins + MostChampions.losses)).toFixed(1)}
												</MostInfoKDA>
											</MostInfoKDACell>
											<MostInfoPlayed>
												<PlayedPercent>
													{((MostChampions.wins / (MostChampions.wins + MostChampions.losses)) * 100).toFixed()}%
												</PlayedPercent>
												<PlayedCount>{MostChampions.wins + MostChampions.losses}게임</PlayedCount>
											</MostInfoPlayed>
										</ChampionBox>
									))}

									{most?.recentWinRate?.map(({ ...RecentWinRate }) => (
										<ChampionBox key={RecentWinRate.key}>
											<MostFace>
												<MostFaceImg src={RecentWinRate.imageUrl} />
											</MostFace>
											<MostInfoCell>
												<MostInfoName>{RecentWinRate.name}</MostInfoName>
											</MostInfoCell>
											<MostInfoKDACell>
												<PlayedPercent>
													{((RecentWinRate.wins / (RecentWinRate.wins + RecentWinRate.losses)) * 100).toFixed()}%
												</PlayedPercent>
											</MostInfoKDACell>
											<MostInfoKDACell>
												<div>
													{RecentWinRate.wins}
													{RecentWinRate.losses}
												</div>
											</MostInfoKDACell>
										</ChampionBox>
									))}
								</div>

								<div>리스트</div>
							</>
						</FreeLank>
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
