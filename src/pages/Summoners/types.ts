import React from 'react';

export interface SummonerProps {
	name: string;
	level: number;
	profileImageUrl: string;
	profileBorderImageUrl: string;
	profileBackgroundImageUrl: string;
	url: string;
	leagues: LeaguesType[];
	previousTiers: [];
	ladderRank: LadderRankType;
}

export interface LadderRankType {
	rank: number;
	rankPercentOfTop: number;
}

export interface LeaguesType {
	hasResults: boolean;
	wins: number;
	losses: number;
	tierRank: TierRankType;
}

export interface TierRankType {
	name: string;
	tier: string;
	shortString: string;
	lp: number;
	imageUrl: string;
}
