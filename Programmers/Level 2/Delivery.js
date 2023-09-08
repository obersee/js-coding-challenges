function solution(N, road, K) {
      // 1.
    const dist = Array(N + 1).fill(Infinity);
    const adj = Array.from({ length: N + 1 }, () => []);

      // 1-1.
    road.forEach(([a,b,c]) => {        
        adj[a].push({ to: b, time: c }); 
        adj[b].push({ to: a, time: c }); 
    });

      // 2.
    const pq = [{ to: 1, time: 0 }];
    dist[1] = 0;

      // 3.
    while (pq.length) {
        let {to, time} = pq.pop();

          // 4.
        adj[to].forEach(next => {
            if (dist[next.to] > dist[to] + next.time) {
                dist[next.to] = dist[to] + next.time;
                pq.push(next);
            }
        })
    }

      // 5.
    return dist.filter((item) => item <= K ).length;
}
