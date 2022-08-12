import styled from '@emotion/styled';

export const RightMenu = styled.div`
	float: right;
`;

export const Container = styled.div`
	width: 1000px;
	margin: auto;
`;

export const Header = styled.div`
	width: 100%;
	height: 97px;
	background-color: #1ea1f7;
`;

export const Input = styled.input`
	float: right;
	width: 260px;
	height: 32px;
	border-radius: 2px;
	background-color: #fff;
	margin-top: 53px;
`;

export const Profile = styled.div`
	height: 175px;
	border-bottom: solid 1px #cdd2d2;
`;

export const LeftSide = styled.div`
	display: inline-block;
	width: 300px;
	margin-top: 10px;
`;

export const History = styled.div`
	display: inline-block;
	width: auto;
	margin-top: 10px;
	margin-left: 10px;
	vertical-align: top;
	width: 690px;
`;

export const Lank = styled.div`
	display: flex;
	border-radius: 2px;
	border: solid 1px #cdd2d2;
	padding: 10px 8px;
	max-height: 124px;
	background: #f2f2f2;
	margin-bottom: 8px;

	font-size: 12px;
	font-family: AppleSDGothicNeo;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #879292;
`;

export const FreeLank = styled.div`
	margin-top: 8px;
	border-radius: 2px;
	border: solid 1px #cdd2d2;
	min-height: 98px;
	background: #f2f2f2;
`;

export const TotalHeader = styled.ul`
	border-radius: 2px;
	border: solid 1px #cdd2d2;
	border-bottom: none;
	padding: 10px 16px 0 16px;
	background: #f2f2f2;

	font-family: NanumBarunGothicOTF;
	font-size: 12px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #555;
	margin: 0;
`;

export const Total = styled.div`
	border-radius: 2px;
	border: solid 1px #cdd2d2;
	padding: 10px 8px;
	background: #ededed;
	// height: 194px;
`;

export const MatchWrapper = styled.div`
	margin-top: 16px;
	background: #ededed;
`;

export const MatchItem = styled.div<{ isWin?: boolean }>`
	margin-top: 8px;
	background: #ededed;
	height: 96px;
	padding: 0 0 0 15px;
	border: solid 1px ${({ isWin }) => (isWin ? '#a1b8cd;' : '#c0aba8;')};
	background-color: ${({ isWin }) => (isWin ? '#b0ceea;' : '#d6b5b2;')};
	display: flex;
`;

export const ProfileBorder = styled.div<{ src?: string }>`
	display: inline-block;
	width: 120px;
	height: 120px;
	margin: 5px 0 0 20px;
	padding: 11px 11px 9px 9px;
	background-image: ${({ src }) => `url(${src})`};
	background-repeat: no-repeat;
`;
export const ProfileImage = styled.img`
	width: 100px;
	height: 100px;
`;

export const LevelBox = styled.span`
	position: relative;
	top: -13px;
	margin-left: 33px;

	display: inline-block;
	line-height: 20px;
	padding: 0px 8px;
	font-size: 14px;
	border-radius: 10px;
	color: rgb(255, 255, 255);
	background-color: rgb(32, 45, 55);
	font-family: Roboto, sans-serif;
`;

export const PreviousTiers = styled.div`
	display: flex;
	margin: 15px 10px 5px 20px;
`;

export const TierItem = styled.div`
	max-width: 100px;
	height: 20px;
	line-height: 20px;
	margin: 0 0 0 7px;
	padding: 0px 5px;
	border-radius: 2px;
	border: solid 1px #d0d3d4;
	background-color: #e0e3e3;

	font-family: Helvetica;
	font-size: 11px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: -0.42px;
	color: #657070;
`;

export const Strong = styled.span`
	font-weight: bold;
`;

export const SummonerWrapper = styled.div`
	display: inline-block;
	vertical-align: top;

	font-family: AppleSDGothicNeo;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.77px;
	color: #242929;
`;

export const SummonerName = styled.p`
	margin: 17px 0 4px 0;

	font-size: 20px;
	font-weight: bold;
	letter-spacing: -0.77px;
	color: #242929;
`;

export const RadderRank = styled.p`
	margin: 0;
	font-size: 11px;
	letter-spacing: -0.42px;
	color: #657070;
`;

export const LankSymbol = styled.img`
	display: inline-block;
	width: 104px;
	height: 104px;
`;

export const LankInfo = styled.div`
	margin: 6px 8px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
`;

export const LankName = styled.div`
	font-size: 11px;
`;

export const TierRankName = styled.div`
	font-family: Helvetica;
	font-size: 15px;
	color: #1f8ecd;
	margin-top: 4px;
`;

export const Lp = styled.p`
	font-family: Helvetica;
	font-weight: bold;
	color: #555e5e;
	margin: 4px 0 0 0;
`;

export const WinLoosses = styled.span`
	font-family: Helvetica;
	font-weight: normal;
	color: #879292;
	margin-top: 4px;
`;

export const Late = styled.div`
	font-family: Helvetica;
`;

//최근 챔피언
export const ChampionBox = styled.div`
	display: table;
	width: 268px;
	height: 48px;
	border-bottom: solid 1px #cdd2d2;
	background-color: #ededed;

	text-align: center;
	table-layout: fixed;
	padding: 3px 15px;
`;

export const MostFace = styled.div`
	border-radius: 50%;
	display: table-cell;
	text-align: left;
	vertical-align: middle;
`;

export const MostFaceImg = styled.img`
	border-radius: 50%;
	width: 45px;
	height: 45px;
`;

export const MostInfoCell = styled.div`
	display: table-cell;
	text-align: left;
	vertical-align: middle;
	box-sizing: border-box;
`;

export const MostInfoName = styled.div`
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	font-family: AppleSDGothicNeo;
	font-size: 13px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #5e5e5e;
`;

export const MostInfoCS = styled.div`
	margin-top: 3px;
	font-size: 11px;
	font-family: Helvetica;
	font-size: 11px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #879292;
`;

export const MostInfoKDACell = styled.div`
	display: table-cell;
	// width: 75px;
	vertical-align: middle;
	text-align: center;
	box-sizing: border-box;
`;

export const MostInfoKDA = styled.div`
	margin-top: 3px;
	height: 13px;
	font-family: Helvetica;
	font-size: 11px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	text-align: center;
	color: #879292;
`;

export const MostInfoScore = styled.div`
	font-family: Helvetica;
	font-size: 13px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	text-align: center;
	color: #5e5e5e;
`;

export const MostInfoPlayed = styled.div`
	display: table-cell;
	vertical-align: middle;
	text-align: center;
	box-sizing: border-box;
`;

export const PlayedPercent = styled.div`
	font-family: Helvetica;
	font-size: 13px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	text-align: center;
	color: #5e5e5e;
`;

export const PlayedCount = styled.div`
	margin-top: 3px;
	font-family: Helvetica;
	font-size: 11px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	text-align: center;
	color: #879292;
`;

export const RecentFaceImg = styled.img`
	border-radius: 50%;
	width: 32px;
	height: 32px;
`;

export const Graph = styled.div`
	width: 123px;
	border-radius: 4px;
	position: relative;
	display: inline-block;
	height: 24px;
	overflow: hidden;
`;

export const Win = styled.div<{ width?: number }>`
	background-color: #1f8ecd;
	width: ${({ width }) => `${width}%;`};
	display: inline-block;
	vertical-align: middle;
	height: 100%;
	z-index: 2;
	text-align: left;
`;

export const Losses = styled.div<{ width?: number }>`
	background-color: #ee5a52;
	width: ${({ width }) => `${width}%;`};
	display: inline-block;
	vertical-align: middle;
	height: 100%;
	z-index: 1;
	text-align: right;
`;

export const WinText = styled.div`
	position: absolute;
	top: 4px;
	left: 4px;
	text-align: left;
	font-family: Helvetica;
	font-size: 12px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #fff;
`;

export const LossesText = styled.div`
	position: absolute;
	top: 4px;
	right: 4px;
	text-align: left;
	font-family: Helvetica;
	font-size: 12px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #fff;
`;

export const RecentFace = styled.div`
	border-radius: 50%;
	display: table-cell;
	text-align: left;
	vertical-align: middle;
	width: 45px;
`;

export const RecentCell = styled.div`
	display: table-cell;
	text-align: left;
	vertical-align: middle;
	box-sizing: border-box;
	width: 50px;
`;

export const RecentRateCell = styled.div`
	display: table-cell;
	// width: 75px;
	vertical-align: middle;
	text-align: center;
	box-sizing: border-box;
	width: 55px;
`;

export const TabUl = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	width: 100%;
`;

export const Tabli = styled.li<{ tabState?: boolean }>`
	height: 44px;
	background-color: ${({ tabState }) => (tabState ? '#ededed;' : '#f2f2f2;')};
	border: ${({ tabState }) => (tabState ? 'solid 1px #ededed;' : 'solid 1px #cdd2d2;')};
	display: inline-block;
	width: 50%;
`;

export const TabName = styled.p<{ tabState?: boolean }>`
	font-family: AppleSDGothicNeo;
	font-size: 12px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: ${({ tabState }) => (tabState ? '#5e5e5e;' : '#879292;')};
	text-align: center;
	margin: 15px 0;
`;

export const TotalTab = styled.span<{ tabState?: boolean }>`
	margin-right: 15px;
	display: inline-block;
	font-family: NanumBarunGothicOTF;
	font-size: 12px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: ${({ tabState }) => (tabState ? '#1f8ecd;' : '#555;')};
	border-bottom: ${({ tabState }) => (tabState ? 'solid 2px #1f8ecd;' : 'none')};
	padding-bottom: 6px;
	width: 50px;
	text-align: center;
`;

export const TypeCell = styled.div`
	text-align: center;
	font-family: AppleSDGothicNeo;
	font-size: 11px;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.42px;
	font-weight: normal;
	justify-content: center;
	display: flex;
	flex-flow: column;
`;

export const ChampionCell = styled.div``;

export const GameInfoCell = styled.div`
	display: block;
`;

export const ItemCell = styled.div`
	display: block;
`;

export const TeamCell = styled.div`
	display: block;
`;

export const More = styled.div`
	display: block;
`;

export const GameType = styled.span`
	font-weight: bold;
	margin: 2px;
	color: #555;
`;

export const GameDate = styled.span`
	margin: 2px;
`;

export const GameBar = styled.div<{ isWin?: boolean }>`
	width: 27px;
	height: 1px;
	margin: 3px auto;
	background-color: ${({ isWin }) => (isWin ? '#94b9d6;' : '#d0a6a5;')};
`;

export const GameWin = styled.span<{ isWin?: boolean }>`
	font-weight: bold;
	margin: 2px;
	color: ${({ isWin }) => (isWin ? '#2c709b;' : '#d0021b;')};
`;
