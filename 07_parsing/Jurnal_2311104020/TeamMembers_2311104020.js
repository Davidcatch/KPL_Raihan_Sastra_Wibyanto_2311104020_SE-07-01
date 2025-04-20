import { readFile } from 'fs/promises';

class TeamMembers_2311104020 {
  static async ReadJSON() {
    const rawData = await readFile('./jurnal7_2_2311104020.json', 'utf-8');
    const data = JSON.parse(rawData);

    console.log('Team member list:');
    data.team_members.forEach((member) => {
      console.log(`${member.nim} ${member.first_name} ${member.last_name} (${member.age} ${member.gender})`);
    });
  }
}

TeamMembers_2311104020.ReadJSON();
