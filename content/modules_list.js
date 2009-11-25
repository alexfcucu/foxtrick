/*
 * modules_list.js
 */
////////////////////////////////////////////////////////////////////////////////
 /** Modules that need to be initialized and register their page handlers
 * in the beginning.
 * Each should implement an init() method, which will be called only once.
 * Register your page handlers in it.
 */
Foxtrick.modules = [
                    FoxtrickForumStripHattrickLinks,
					FoxtrickForumChangePosts,
                    FoxtrickShowForumPrefButton,
                    FoxtrickMovePlayerSelectbox,  // keep before others on playerdetails page
                    FoxtrickAddManagerButtons,   // keep before FoxtrickAddDefaultFaceCard
                    FoxtrickMovePlayerStatement,
                    FoxtrickFixcssProblems,
                    FoxtrickForumTemplates,
                    FoxtrickForumPreview,
                    FoxtrickForumYouthIcons,
                    Foxtrick.BookmarkAdjust,
                    //FoxtrickHideManagerAvatar,
                    FoxtrickAddDefaultFaceCard,
                    FoxtrickMoveLinks,   // keep before FoxtrickHideManagerAvatarUserInfo
                    FoxtrickAlltidFlags,  // keep before FoxtrickHideManagerAvatarUserInfo
                    FoxtrickForumAlterHeaderLine,
                    FoxtrickTeamPopupLinks,
                    FoxtrickTeamPopupLinksMore,
                    FoxtrickHideManagerAvatarUserInfo,
                    FoxtrickGoToPostBox,
                    FoxtrickContextMenueCopyId,
                    FoxtrickCopyTrainingReport,
                    FoxtrickCopyScoutReport,
                    FoxtrickCopyPlayerSource,
                    FoxtrickFormatPostingText,
                    FoxtrickCopyPostID,
                    FoxtrickStaffMarker,
                    FoxtrickHTThreadMarker,
                    FoxtrickMedianTransferPrice,
                    FoxtrickYouthSkillNotes,
                    FoxtrickAddLeaveConfButton,
                    FoxtrickFlipSidesInMatchOrders,
                    FoxtrickStarsCounter,
                    FoxtrickRepositionedPlayers,
                    FoxtrickAdvancedStarsCounter,
                    FoxtrickFormationBoxInMatchOrders,
                    FoxtrickFlagCollectionToMap,
                    FoxtrickTransferListSearchFilters,
                    FoxtrickTransferListDeadline,
                    FoxtrickExtendedPlayerDetails,
                    FoxtrickLastLogin,
                    FoxtrickExtendedPlayerDetailsWage,
                    FoxtrickHTDateFormat,
                    FoxtrickMatchReportFormat,
                    FoxtrickMatchPlayerColouring,
                    Foxtrick.AttVsDef, // AttVsDef should be placed before Ratings
                    Foxtrick.Ratings,
                    Foxtrick.htmsStatistics, // htmsStatistics should be placed after Ratings
                    FoxtrickYouthSkillTable,
                    FoxtrickAdultSkillTable,
                    Foxtrick.TeamStats,  // before FoxtrickLinksPlayers
                    FoxtrickAlert,
                    FoxtrickAlertCustomOff,
                    FoxtrickAlertCustomSounds,
                    FoxtrickHideFaceTransferImages,
                    FoxtrickHideFaceInjuryImages,
                    FoxtrickHideFaceSuspendedImages,
                    FoxtrickColouredYouthFaces,
                    FoxtrickBackgroundFixed,
                    FoxtrickPlayerAdToClipboard,
                    FoxtrickCopyRatingsToClipboard,
                    FoxtrickLinksCustom,
                    FoxtrickLinksLeague,
                    FoxtrickLinksCountry,
                    FoxtrickLinksTeam,
                    FoxtrickLinksChallenges,
                    FoxtrickLinksEconomy,
                    FoxtrickLinksYouthOverview,
                    FoxtrickLinksYouthTraining,  // new but include
                    FoxtrickLinksYouthPlayerDetail, // new but include
                    FoxtrickLinksArena,
                    FoxtrickLinksCoach,
                    FoxtrickLinksPlayerDetail,
                    FoxtrickLinksMatch,
                    FoxtrickLinksTraining,
                    FoxtrickLinksAlliances,
                    FoxtrickLinksNational,
                    FoxtrickLinksManager,
                    FoxtrickLinksAchievements,
                    FoxtrickLinksPlayers,
                    FoxtrickLinksFans,
                    FoxtrickLinksStaff,
                    FoxtrickLinksTracker,
                    FoxtrickConfirmPlayerBid,
                    FoxtrickConfirmTL,
                    FoxtrickConfirmStaffChange,
                    FoxtrickNTConfirmAddRemove,
                    FoxtrickEconomyDifference,
                    FoxtrickHideSignatures,
                    FoxtrickForumNextAndPrevious,
                    FoxtrickForumLastPost,
                    FoxtrickPersonalityImages,
                    FoxtrickSkillColoring,
                    FoxtrickSkinPlugin,
                    FoxtrickMatchIncome,
                    FoxtrickHelper,
                    FoxtrickLargeFlags,
                    FoxtrickTeamSelectBox,
                    FoxtrickSeniorTeamShortCuts,
                    FoxtrickShortcutsStatistics,
                    FoxtrickCustomMedals,
                    FoxtrickForumRedirManagerToTeam,
                    FoxtrickRedirections,
                    FoxtrickGuestbookAlltidFlags,
                    FoxtrickCurrencyConverter,
                    FoxtrickTickerColoring,
                    FoxtrickSeasonStats,   // keep before FoxtrickCopyMatchID
                    FoxtrickHistoryStats,   // keep before FoxtrickCopyMatchID
                    FoxtrickCopyMatchID,
                    FoxtrickHeaderFix,
                    FoxtrickHeaderFixLeft,
                    FoxtrickNewMail,
                    FoxtrickPlayerBirthday,
                    //FoxtrickAddHtLiveToOngoing,
                    FoxtrickReadHtPrefs,
                    FoxtrickMyHT,
                    FoxtrickPrefsDialogHTML,
                    FoxtrickLeagueNewsFilter,
                    FoxtrickShortPAs,
                    FoxtrickCopyPosting,
                    FoxtrickMoveManagerOnline,
                    // FoxtrickForumSearch,  // new not finished
                    FoxtrickTables,
                    FoxtrickMatchTables,
                    FoxtrickCrossTable,
                    FoxtrickYouthSkillHideUnknown,
                    FoxtrickHighlightCupwins,
                    FoxtrickElectionTable,
                    FoxtrickSkillTranslation,
                    FoxtrickOnPagePrefs,
                    FoxtrickLineupShortcut,
                    //FoxtrickSingleline2,
                    FoxtrickYouthPromotes,
                    FoxtrickCountyList,
                    FoxtrickMatchOrderColoring,
                    FoxTrickPredefinedChallenges,
                    FoxtrickSmallerPages, // new not finished //after FoxtrickTransferListDeadline and probably also after all other player detail adjustment, so keep it in the end
                    FoxtrickHighlightBotTeams,
					FoxtrickTransferCompareSort,
                    ];