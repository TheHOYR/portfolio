var cpt= 0;
$(document).ready(function() {

	addParallaxEffectInExperienceSection();

	smoothScroll();

	//affichage phrase sous compétences
	displayUnderSkill();
	//Affichage des description des projet
	displayDescriptionProjet();

});//fin document.ready

function smoothScroll()
{
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
}

function displayDescriptionProjet()
{
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
	});//fin hover
}

function displayUnderSkill()
{
	$(".competenceGenerale").click(function(){
		if ($(this).attr('id') == "vienClique")
        {
            $(this).html('Veuillez cliquez sur l\'une des compétences pour en voir le detail');
            resetHeightSkills()
        }
		else
		{
			ajoutSkill($(this).attr("id"));
			reductHeightSkills();
		}
		console.log($(this).attr("id"));

	});//finclick competenceGenerale
}

function ajoutSkill(id)
{
    switch(id)
    {
        case "competenceWeb":
			var listeCircle =
                [
                    {id:"php", value:0.90,text:"PHP"},
                    {id:"js", value:0.80,text:"Javascript"},
                    {id:"jquery", value:0.85,text:"JQuery"},
                    {id:"html", value:0.90,text:"HTML"},
                    {id:"sql", value:0.80,text:"SQL"},
                    {id:"prestashop", value:0.75,text:"PrestaShop"},
                ];
            break;
        case "competenceGraphismeDesign":
			var listeCircle =
                [
                    {id:"css", value:0.85,text:"CSS"},
                    {id:"photoshop", value:0.70,text:"Adobe <br/>Photoshop"},
                    {id:"première", value:0.80,text:"Adobe <br/>Première"},
                    {id:"illustrator", value:0.60,text:"Adobe <br/>Illustrator"},
                    {id:"muse", value:0.60,text:"Adobe <br/>Muse"},
                    {id:"muse", value:0.60,text:"Adobe <br/>Muse"},
                ];
            break;
        case "competenceConception":
			var listeCircle =
                [
                    {id:"warframe_sketcher", value:0.70,text:"Warframe<br/>Sketcher"},
                    {id:"merise", value:0.70,text:"Methode<br/>MERISE"},
                    {id:"uml", value:0.70,text:"UML"},
                    {id:"gestionPrj", value:0.70,text:"Gestion de<br/>projet"},
                ];
            break;
    }
    var CircleAjout ="";
    $.each(listeCircle, function(index, item)
    {
        if (item.text.indexOf("<br") != -1)
		{
			CircleAjout += "<div class=\"circle\" id=\""+item.id+"Circle\">\n" +
				"\t<strongCircleLong>"+item.text+"</strongCircleLong>\n" +
				"\t</div>";
		}
        else
		{
			CircleAjout += "<div class=\"circle\" id=\""+item.id+"Circle\">\n" +
				"\t<strongCircleShort>"+item.text+"</strongCircleShort>\n" +
				"\t</div>";
		}
    });

    var CircleAjout2 = "<div id='flex'>"+CircleAjout+"</div>";
    $('#vienClique').html(CircleAjout2);

    setCircles(listeCircle);
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

function addParallaxEffectInExperienceSection()
{
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
}

function setCircles(listeCircle)
{
	/**
	 *Example from https://kottenator.github.io/jquery-circle-progress/
	 */
	var progressBarOptions = {
		startAngle: -1.55,
		size: 200,
		value: 0.75,
		fill: {
			color: '#4a6075'
		}
	}

	$('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
		//$(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
	});


    $.each(listeCircle, function(index, item)
    {
        var id = item.id+"Circle";
        $("#"+item.id+"Circle").circleProgress({
            value : item.value
        });
    });
}

function reductHeightSkills()
{
	$("#cliqueUp").css('font-size', '3vw');
	$("#competenceWeb, #competenceGraphismeDesign, #competenceConception").find(".competenceImg").css('font-size', '5vw');
}
function resetHeightSkills()
{
    $("#cliqueUp").css('font-size', '5vw');
    $("#competenceWeb, #competenceGraphismeDesign, #competenceConception").find(".competenceImg").css('font-size', '8vw');
}