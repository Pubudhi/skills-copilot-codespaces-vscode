function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/member/skills.html',
    controller: 'SkillsMemberController',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}

