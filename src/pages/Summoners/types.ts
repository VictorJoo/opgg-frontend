import React from 'react';
export interface Summoner {
	name: string;
	level: number;
	profileImageUrl: string;
	profileBorderImageUrl: string;
	profileBackgroundImageUrl: string;
	url: string;
	leagues: Leagues[];
	previousTiers: [];
	ladderRank: LadderRank;
}

type LadderRank = {
	rank: number;
	rankPercentOfTop: number;
};

type Leagues = {
	hasResults: boolean;
	wins: number;
	losses: number;
	tierRank: TierRank;
};

export interface TierRank {
	name: string;
	tier: string;
	shortString: string;
	lp: number;
	imageUrl: string;
}
export interface MostInfo {
	champions: MostChampions[];
	recentWinRate: RecentWinRate[];
}
export type MostChampions = {
	id: number;
	key: string;
	name: string;
	imageUrl: string;
	games: number;
	kills: number;
	deaths: number;
	assists: number;
	wins: number;
	losses: number;
	cs: number;
	rank: number;
};
export type RecentWinRate = {
	id: number;
	key: string;
	name: string;
	imageUrl: string;
	wins: number;
	losses: number;
};

export interface Matches {
	games: MatchesGames[];
	champions: MatchesChampions[];
	positions: MatchesPositions[];
	summary: MatchesSummary;
}

export type MatchesGames = {
	mmr: number;
	champion: {
		imageUrl: string;
		level: number;
	};
	spells: { imageUrl: string }[];
	items: { imageUrl: string }[];
	needRenew: boolean;
	gameId: string;
	createDate: number;
	gameLength: number;
	gameType: string;
	summonerId: string;
	summonerName: string;
	tierRankShort: string;
	stats: {
		general: {
			kill: number;
			death: number;
			assist: number;
			kdaString: string;
			cs: number;
			csPerMin: number;
			contributionForKillRate: string;
			goldEarned: number;
			totalDamageDealtToChampions: number;
			largestMultiKillString: string;
			opScoreBadge: string;
		};
		ward: {
			sightWardsBought: number;
			visionWardsBought: number;
		};
	};
	mapInfo: boolean;
	peak: string[];
	isWin: boolean;
};

export type MatchesChampions = {
	id: number;
	key: string;
	name: string;
	imageUrl: string;
	games: number;
	kills: number;
	deaths: number;
	assists: number;
	wins: number;
	losses: number;
};

export type MatchesPositions = {
	games: number;
	wins: number;
	losses: number;
	position: string;
	positionName: string;
};

export type MatchesSummary = {
	wins: number;
	losses: number;
	kills: number;
	deaths: number;
	assists: number;
};
