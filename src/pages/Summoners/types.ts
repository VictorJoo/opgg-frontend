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
