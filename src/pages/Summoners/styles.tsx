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
	padding: 17px 28px;
	max-height: 98px;
	background: #f2f2f2;
`;

export const WinningRate = styled.div`
	margin-top: 8px;
	border-radius: 2px;
	border: solid 1px #cdd2d2;
	padding: 10px 8px;
	background: #f2f2f2;
`;

export const TotalHeader = styled.div`
	border-radius: 2px;
	border: solid 1px #cdd2d2;
	padding: 10px 16px;
	background: #f2f2f2;

	font-family: NanumBarunGothicOTF;
	font-size: 12px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #555;
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

export const MatchItem = styled.div`
	margin-top: 8px;
	background: #ededed;
	height: 96px;
	padding: 0 0 0 15px;
	border: solid 1px #a1b8cd;
	background-color: #b0ceea;
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

export const TierRank = styled.div`
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
