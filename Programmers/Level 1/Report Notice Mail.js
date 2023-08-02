function solutionA(id_list, report, k) {
    const userList = id_list.reduce((result, currentId) => {
      result[currentId] = [0, []];
      return result;
    }, {});
  
    for (const id of new Set(report)) {
      const [REPORT_ID, ID] = id.split(' ');
      userList[REPORT_ID][1].push(ID);
      userList[ID][0]++;
    }
  
    const banned = id_list.filter((id) => userList[id][0] >= k);
    const emailList = id_list.map((id) => {
      return userList[id][1].filter((id) => {
        return banned.includes(id);
      }).length;
    });
  
    return emailList;
  }

  function solutionB(id_list, report, k) {
    const answer = new Array(id_list.length).fill(0);
    const report_list = {};
    const reporters = [];
    
    id_list.forEach(id => {
        report_list[id] = [];
    });
    
    report = report.filter((id, index, arr) => arr.indexOf(id) === index);
    
    report.forEach(v => {
        const arr = v.split(' ');
        report_list[arr[1]].push(arr[0]);
    });
    
    for (let key in report_list) {
        if (report_list[key].length >= k) {
            reporters.push(...report_list[key]);
        }
    }
    
    reporters.forEach(id => {
        if (id_list.includes(id)) {
            answer[id_list.indexOf(id)]++;
        }
    });
    
    return answer;
}

function test() {
    const id_list1 = ["muzi", "frodo", "apeach", "neo"];
    const id_list2 = ["con", "ryan"];
    const report1 = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
    const report2 = ["ryan con", "ryan con", "ryan con", "ryan con"];
    const result1 = solutionA(id_list1, report1, 2);
    const result2 = solutionB(id_list2, report2, 3);

    console.log(result1[0] === 2 && result1[1] === 1 && result1[2] === 1 && result1[3] === 0);
    console.log(result2[0] === 0 && result2[1] === 0);
}

test();
