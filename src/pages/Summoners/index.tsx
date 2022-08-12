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
	RecentFaceImg,
	Graph,
	Win,
	Losses,
	WinText,
	LossesText,
	RecentFace,
	RecentCell,
	RecentRateCell,
	TabUl,
	Tabli,
	TabName,
	TotalTab,
	TypeCell,
	ChampionCell,
	GameInfoCell,
	ItemCell,
	TeamCell,
	More,
	GameType,
	GameDate,
	GameBar,
	GameWin,
} from '@pages/Summoners/styles';

import { Summoner, MostInfo, TierRank, MostChampions, RecentWinRate, Matches, MatchesGames } from './types';

const Summoners = () => {
	const [name, setName] = useState('소환사');
	const [user, setUser] = useState<Summoner>();
	const [most, setMost] = useState<MostInfo>();
	const [matches, setMatches] = useState<Matches>();
	const [loading, setLoading] = useState(false);
	const [rateTab, setRateTab] = useState('champion');
	const [totalTab, setTotalTab] = useState('all');
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

	//매치 리스트
	const getMatches = async () => {
		try {
			setLoading(true);

			if (name) {
				const response = await axios.get(`/summoner/${name}/matches`, {
					withCredentials: true, // 쿠키 cors 통신 설정
				});
				setMatches(response.data);
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
		getMost();
		getMatches();
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

	const changeTab = (tabName: string) => {
		setRateTab(tabName);
	};

	const changeTotalTab = (tabName: string) => {
		setTotalTab(tabName);
	};

	useEffect(() => {
		getUser();
		getMost();
		getMatches();
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
						{user?.leagues?.map(({ wins, losses, tierRank }) => (
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
								<TabUl>
									<Tabli tabState={rateTab === 'champion'} onClick={() => changeTab('champion')}>
										<TabName tabState={rateTab === 'champion'}>챔피언 승률</TabName>
									</Tabli>
									<Tabli tabState={rateTab === 'recent'} onClick={() => changeTab('recent')}>
										<TabName tabState={rateTab === 'recent'}>7일간 랭크 승률</TabName>
									</Tabli>
								</TabUl>

								<div>
									{rateTab === 'champion'
										? most?.champions?.map(({ ...MostChampions }) => (
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
										  ))
										: most?.recentWinRate?.map(({ ...RecentWinRate }) => (
												<ChampionBox key={RecentWinRate.key}>
													<RecentFace>
														<RecentFaceImg src={RecentWinRate.imageUrl} />
													</RecentFace>
													<RecentCell>
														<MostInfoName>{RecentWinRate.name}</MostInfoName>
													</RecentCell>
													<RecentRateCell>
														<PlayedPercent>
															{((RecentWinRate.wins / (RecentWinRate.wins + RecentWinRate.losses)) * 100).toFixed()}%
														</PlayedPercent>
													</RecentRateCell>
													<MostInfoKDACell>
														<Graph>
															<Win
																width={Number(
																	((RecentWinRate.wins / (RecentWinRate.wins + RecentWinRate.losses)) * 100).toFixed(),
																)}
															/>
															<WinText>{RecentWinRate.wins}승</WinText>
															<Losses
																width={Number(
																	(
																		(RecentWinRate.losses / (RecentWinRate.wins + RecentWinRate.losses)) *
																		100
																	).toFixed(),
																)}
															/>
															<LossesText>{RecentWinRate.losses}패</LossesText>
														</Graph>
													</MostInfoKDACell>
												</ChampionBox>
										  ))}
								</div>
							</>
						</FreeLank>
					</LeftSide>
					<History>
						<TotalHeader>
							<TotalTab tabState={totalTab === 'all'} onClick={() => changeTotalTab('all')}>
								전체
							</TotalTab>
							<TotalTab tabState={totalTab === 'solo'} onClick={() => changeTotalTab('솔랭')}>
								솔로 랭크
							</TotalTab>
							<TotalTab tabState={totalTab === 'free'} onClick={() => changeTotalTab('자유 5:5 랭크')}>
								자유랭크
							</TotalTab>
						</TotalHeader>
						{matches && (
							<>
								<Total>
									<div>
										<div>
											{matches.summary.wins + matches.summary.losses}전 {matches.summary.wins}승{' '}
											{matches.summary.losses}패
										</div>
									</div>
									<div>cham</div>
									<div>position</div>
								</Total>

								<MatchWrapper>
									{matches.games.map(({ ...MatchesGames }) =>
										totalTab === 'all' ? (
											<MatchItem key={MatchesGames.gameId} isWin={MatchesGames.isWin}>
												<TypeCell>
													<GameType>{MatchesGames.gameType}</GameType>
													<GameDate>{MatchesGames.createDate}</GameDate>
													<GameBar isWin={MatchesGames.isWin}></GameBar>
													<GameWin isWin={MatchesGames.isWin}>{MatchesGames.isWin ? '승리' : '패배'}</GameWin>
													<GameDate>{MatchesGames.gameLength}</GameDate>
												</TypeCell>
												<ChampionCell></ChampionCell>
												<GameInfoCell></GameInfoCell>
												<ItemCell></ItemCell>
												<TeamCell></TeamCell>
												<More></More>
											</MatchItem>
										) : (
											totalTab === MatchesGames.gameType && (
												<MatchItem key={MatchesGames.gameId} isWin={MatchesGames.isWin}>
													<TypeCell>
														<GameType>{MatchesGames.gameType}</GameType>
														<GameDate>{MatchesGames.createDate}</GameDate>
														<GameBar isWin={MatchesGames.isWin}></GameBar>
														<GameWin isWin={MatchesGames.isWin}>{MatchesGames.isWin ? '승리' : '패배'}</GameWin>
														<GameDate>{MatchesGames.gameLength}</GameDate>
													</TypeCell>
													<ChampionCell></ChampionCell>
													<GameInfoCell></GameInfoCell>
													<ItemCell></ItemCell>
													<TeamCell></TeamCell>
													<More></More>
												</MatchItem>
											)
										),
									)}
								</MatchWrapper>
							</>
						)}
					</History>
				</Container>
			</MainLayout>
		</Suspense>
	);
};

export default Summoners;
