var cpt= 0;
$(document).ready(function() {

	$("body").mousemove(function(e) 
 {
    mx = e.pageX;
    my = e.pageY;
    var w = $(window).width();
    var p = $(this).position();
    var y = p.top;
        $("#projets").css({
            "background-position":(-mx/100)+"px "+(-27+my/100)+"px "
        });
 });
//-----------------------------------------------------------
	$(function () {
	        $('a[href^="#"]').click(function()
	        {
	                var the_id = $(this).attr("href");

	                $('html, body').animate(
	                {
	                		scrollTop:$(the_id).offset().top-20
	                }, 1500);
	                return false;
	        });
	});//fin smooth scroll
//-----------------------------------------------------------
	//affichage phrase sous compétences
	$(".competenceGenerale").click(function(){
		switch($(this).attr("id")) {
    case "competenceWeb":
        ajoutSkillWeb($(this).attr("id"));
        break;
    case "competenceGraphismeDesign":
        ajoutSkillGraphisme($(this).attr("id"));
        break;
    case "competenceConception":
        ajoutSkillConception($(this).attr("id"));
        break;
    case "vienClique":
    	ajoutSkillBadClic($(this).attr("id"));
    	break;
}
		console.log($(this).attr("id"));

	});//finclick competenceGenerale

	//Affichage description card projects
	$('.projectCard').click(function()
		{
			if (cpt==0) 
			{
				cpt=1
				var description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ";
				
				var description_Advisor = "Un site web reprenant les fonctionnalités principales du site TripAvisor.fr comme la recherche d'hotels par ville, gestions des commentaires utilisateurs ou bien la gestions des comptes.";
				var link_Advisor = "./projet_en_cours.php";
				
				var description_LVN = 'Le site LVN est un site qui a été réaliser dans le but de réunir les informations et les créations de notre groupe de cosplay pour que les personnes le souhaitant puissent nous retrouver plus facilement. Le site ayant eu pour but d\'être développé rapidement, il a été réaliser avec Adobe Muse.';
				var link_LVN = "./Cosplay/index.html";
				
				var description_GoldenAnchor = "Un site web réalisé pour promouvoir l'entreprise de vente de bateaux de luxe : Golden Anchor. Il contient un spot publicitaire de la marque et des modélisations 3D des bateaux";
				var link_GoldenAnchor = "./goldenanchor/index.html";
				
				var description_s2s = "Un site web entièrement designer dans le but d'expliquer les dangers de l'addiction aux écrans et dernières technologies. Il permet aussi d'aider les internautes victimes de cette addiction à travers un forum de questions/réponses et quelques solutions expliquées dans nos articles.";
				var link_s2s = "./projet_en_cours.php";
				
				var description_NuitInfo = "Médecins sans frontières a proposé, lors de la nuit de l'informatique, de réaliser un applicatif pour aider les réfugiés a communiqué et à accéder aux premières nécessités. Ce site est la solution que nous avons apportée à la fin de la nuit de développement.";
				var link_NuitInfo = "./projet_en_cours.php";
				
				var description_FIAI = "Un site web créé pour l'association : FIAI des anciens élèves de l'IUT d'Annecy-Le-Vieux, France. Ce site permet aux étudiants de contacter les anciens étudiants, regarder les derniers évènements et consulter les postes à pourvoir.";
				var link_FIAI = "./projet_en_cours.php";

				switch($(this).attr("id")) 
				{
					
					case "projectInfoAdvisor":
						$(this).html('<div class="darker animated fadeInUp"><h1 class="titreDescr">Info Advisor <a target="_blank" href="'+link_Advisor+'"><i class="fa fa-external-link-square" aria-hidden="true"></i></a></h1><h2 class="sousTitreDescr">Site Web</h2><p class="textDescr">'+description_Advisor+'</p></div>');
					break;

					case "projectLVN":
						$(this).html('<div class="darker animated fadeInUp"><h1 class="titreDescr">LVN WebSite <a target="_blank" href="'+link_LVN+'"><i class="fa fa-external-link-square" aria-hidden="true"></i></a></h1><h2 class="sousTitreDescr">Site Web</h2><p class="textDescr">'+description_LVN+'</p></div>');
					break;

					case "projectGoldenAnchor":
						$(this).html('<div class="darker animated fadeInUp"><h1 class="titreDescr">Golden Anchor <a target="_blank" href="'+link_GoldenAnchor+'"><i class="fa fa-external-link-square" aria-hidden="true"></i></a></h1><h2 class="sousTitreDescr">Site Web</h2><p class="textDescr">'+description_GoldenAnchor+'</p></div>');
					break;

					case "projectScream2Screen":
						$(this).html('<div class="darker animated fadeInUp"><h1 class="titreDescr">Scream2Screen <a target="_blank" href="'+link_s2s+'"><i class="fa fa-external-link-square" aria-hidden="true"></i></a></h1><h2 class="sousTitreDescr">Site Web</h2><p class="textDescr">'+description_s2s+'</p></div>');
					break;

					case "projectNuitInfo":
						$(this).html('<div class="darker animated fadeInUp"><h1 class="titreDescr">Medecin sans Frontière <a target="_blank" href="'+link_NuitInfo+'"><i class="fa fa-external-link-square" aria-hidden="true"></i></a></h1><h2 class="sousTitreDescr">Site Web</h2><p class="textDescr">'+description_NuitInfo+'</p></div>');
					break;

					case "projectFIAI":
						$(this).html('<div class="darker animated fadeInUp"><h1 class="titreDescr">FIAI Website <a target="_blank" href="'+link_FIAI+'"><i class="fa fa-external-link-square" aria-hidden="true"></i></a></h1><h2 class="sousTitreDescr">Site Web</h2><p class="textDescr">'+description_FIAI+'</p></div>');
					break;

				}
				
			}
			else
			{
				$(".fadeInUp").addClass( "fadeOutDown" );
				$(this).removeClass( "darker" );
				cpt=0;
			}
		}
		);//fin hover
 

});//fin document.ready


function ajoutSkillWeb(id)
{
	$('#vienClique').html('Detail du web en cours')
}

function ajoutSkillGraphisme(id)
{
	$('#vienClique').html('Detail du graphisme en cours')
}

function ajoutSkillConception(id)
{
	$('#vienClique').html('Detail de la conception en cours')
}

function ajoutSkillBadClic(id)
{
	$('#'+id).html('Veuillez cliquez sur l\'une des compétences pour en voir le detail');
}
