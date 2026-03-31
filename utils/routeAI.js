const calculateScore = (traffic, crime, crowd) => {
    return 10 - (traffic * 0.4 + crime * 0.4 + crowd * 0.2);
};

const generateRoutes = (source, destination) => {
    return [
        {
            name: "Route A",
            path: `${source} → Route A → ${destination}`,
            traffic: Math.floor(Math.random() * 10),
            crime: Math.floor(Math.random() * 10),
            crowd: Math.floor(Math.random() * 10)
        },
        {
            name: "Route B",
            path: `${source} → Route B → ${destination}`,
            traffic: Math.floor(Math.random() * 10),
            crime: Math.floor(Math.random() * 10),
            crowd: Math.floor(Math.random() * 10)
        }
    ];
};

const getBestRoutes = (source, destination, civicIssues) => {
    const routes = generateRoutes(source, destination);

    routes.forEach(route => {

        let civicPenalty = 0;

        civicIssues.forEach(issue => {
            if (issue.issueType) {
                civicPenalty += 1;
            }
        });

        route.score = calculateScore(
            route.traffic,
            route.crime + civicPenalty,
            route.crowd
        );
    });

    routes.sort((a, b) => b.score - a.score);

    return {
        safeRoute: routes[0],
        alternativeRoute: routes[1]
    };
};

module.exports = getBestRoutes;