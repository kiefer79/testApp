  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>PushPlugin/Example/www/PushNotification.js at master · phonegap-build/PushPlugin</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="TqY9AUB7kmzzVFsOnQodgbSdRdEcVbpVP43RwCU7TJc=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-b3fe7e030b8a29c95b855b2d87adfee4e0ef3a28.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-988d2ea200531fd4663519e0bc2c1d050432a201.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-d76b58e749b52bc47a4c46620bf2c320fabe5248.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-847c6dd55da2c1941e239ce5737dd8d3b3535b05.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="ca70db712452429a1ce52e2662309641">

        <link data-pjax-transient rel='permalink' href='/phonegap-build/PushPlugin/blob/a6f665db697ceb4642fbd12e6578df3d18b4ab54/Example/www/PushNotification.js'>
    <meta property="og:title" content="PushPlugin"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/phonegap-build/PushPlugin"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="Push Notification Plugin for iOS and Android. Contribute to PushPlugin development by creating an account on GitHub."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="phonegap-build/PushPlugin"/>

    <meta name="description" content="Push Notification Plugin for iOS and Android. Contribute to PushPlugin development by creating an account on GitHub." />

  <link href="https://github.com/phonegap-build/PushPlugin/commits/master.atom" rel="alternate" title="Recent Commits to PushPlugin:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob linux vis-public fork env-production  ">
    <div id="wrapper">

      

      
      
      

      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-blacktocat" href="https://github.com/">
  <span class="mega-icon mega-icon-blacktocat"></span>
</a>

    <div class="divider-vertical"></div>

      <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  ">
            <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" data-username="kiefer79" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="commandbar">

  <div class="divider-vertical"></div>
</form>
        <ul class="top-nav">
            <li class="explore"><a href="https://github.com/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="http://help.github.com">Help</a></li>
        </ul>
      </div>

    

  
    <ul id="user-links">
      <li>
        <a href="https://github.com/kiefer79" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/dfa31e3a3e9832529a232be069dce166?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> kiefer79
        </a>
      </li>
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
          <span class="mini-icon mini-icon-create"></span>
        </a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
        <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign out">
          <span class="mini-icon mini-icon-logout"></span>
        </a>
      </li>
    </ul>



    
  </div>
</div>

      

      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="TqY9AUB7kmzzVFsOnQodgbSdRdEcVbpVP43RwCU7TJc=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="7005463" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">
          <span class="mini-icon mini-icon-watching"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item js-navigation-target selected">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-watching"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container ">
      <a href="/phonegap-build/PushPlugin/unstar" class="minibutton js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-remove-star"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/phonegap-build/PushPlugin/star" class="minibutton js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/phonegap-build/PushPlugin/stargazers">26</a>
    </li>

        <li>
          <a href="/phonegap-build/PushPlugin/fork" class="minibutton js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="mini-icon mini-icon-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/phonegap-build/PushPlugin/network" class="social-count">27</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-repo-forked"></span>
                <span class="author vcard">
                  <a href="/phonegap-build" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">phonegap-build</span>
                  </a></span> /
                <strong><a href="/phonegap-build/PushPlugin" class="js-current-repository">PushPlugin</a></strong>
                  <span class="fork-flag">
                    <span class="text">forked from <a href="/bobeast/PushPlugin">bobeast/PushPlugin</a></span>
                  </span>
              </h1>
            </div>

            
  <ul class="tabs">
    <li><a href="/phonegap-build/PushPlugin" class="selected" highlight="repo_source repo_downloads repo_commits repo_tags repo_branches">Code</a></li>
    <li><a href="/phonegap-build/PushPlugin/network" highlight="repo_network">Network</a></li>
    <li><a href="/phonegap-build/PushPlugin/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>0</span></a></li>


      <li><a href="/phonegap-build/PushPlugin/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="/phonegap-build/PushPlugin/graphs" highlight="repo_graphs repo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/phonegap-build/PushPlugin/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">7</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item js-navigation-target selected">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/phonegap-build/PushPlugin/blob/master/Example/www/PushNotification.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/phonegap-build/PushPlugin/blob/1.2.0/Example/www/PushNotification.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2.0" rel="nofollow" title="1.2.0">1.2.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/phonegap-build/PushPlugin/blob/1.1.3/Example/www/PushNotification.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1.3" rel="nofollow" title="1.1.3">1.1.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/phonegap-build/PushPlugin/blob/1.1.2/Example/www/PushNotification.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1.2" rel="nofollow" title="1.1.2">1.1.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/phonegap-build/PushPlugin/blob/1.1.1/Example/www/PushNotification.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1.1" rel="nofollow" title="1.1.1">1.1.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/phonegap-build/PushPlugin/blob/1.1.0/Example/www/PushNotification.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1.0" rel="nofollow" title="1.1.0">1.1.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/phonegap-build/PushPlugin/blob/1.0.1/Example/www/PushNotification.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0.1" rel="nofollow" title="1.0.1">1.0.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/phonegap-build/PushPlugin/blob/1.0.0/Example/www/PushNotification.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0.0" rel="nofollow" title="1.0.0">1.0.0</a>
                </div> <!-- /.select-menu-item -->
            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/phonegap-build/PushPlugin" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/phonegap-build/PushPlugin/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/phonegap-build/PushPlugin/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:e05e934ddbf4d3933f9ed93a5891eab1 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:e05e934ddbf4d3933f9ed93a5891eab1 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap-build/PushPlugin" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">PushPlugin</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap-build/PushPlugin/tree/master/Example" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">Example</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap-build/PushPlugin/tree/master/Example/www" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">www</span></a></span><span class="separator"> / </span><strong class="final-path">PushNotification.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="Example/www/PushNotification.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/phonegap-build/PushPlugin/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/6d83987e5008ea53ed011ad91d1155f6?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><span rel="author">Bob Easterday</span></span>
    <time class="js-relative-date" datetime="2013-03-25T17:51:57-07:00" title="2013-03-25 17:51:57">March 25, 2013</time>
    <div class="commit-title">
        <a href="/phonegap-build/PushPlugin/commit/595e762e453249b387ec0c0535bc5ea0d1ff93e3" class="message">Add cold-start functionality</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/abb3d6ddf7191065b081a915a274390d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/bobeast">bobeast</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/phonegap-build/PushPlugin/blob/a6f665db697ceb4642fbd12e6578df3d18b4ab54/Example/www/PushNotification.js" data-title="PushPlugin/Example/www/PushNotification.js at master · phonegap-build/PushPlugin · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>66 lines (48 sloc)</span>
                <span>2.251 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/phonegap-build/PushPlugin/edit/master/Example/www/PushNotification.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/phonegap-build/PushPlugin/raw/master/Example/www/PushNotification.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/phonegap-build/PushPlugin/blame/master/Example/www/PushNotification.js" class="button minibutton ">Blame</a>
                  <a href="/phonegap-build/PushPlugin/commits/master/Example/www/PushNotification.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="data type-javascript js-blob-data">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
</pre>
          </td>
          <td width="100%">
                  <div class="highlight"><pre><div class='line' id='LC1'><br/></div><div class='line' id='LC2'><span class="kd">var</span> <span class="nx">PushNotification</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC3'><span class="p">};</span></div><div class='line' id='LC4'><br/></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'>	<span class="c1">// Call this to register for push notifications. Content of [options] depends on whether we are working with APNS (iOS) or GCM (Android)</span></div><div class='line' id='LC7'>	<span class="nx">PushNotification</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">register</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">successCallback</span><span class="p">,</span> <span class="nx">errorCallback</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC8'>&nbsp;&nbsp;&nbsp;&nbsp;	<span class="k">if</span> <span class="p">(</span><span class="nx">errorCallback</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span> <span class="nx">errorCallback</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{}}</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">errorCallback</span> <span class="o">!=</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC11'>			<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;PushNotification.register failure: failure parameter not a function&quot;</span><span class="p">);</span></div><div class='line' id='LC12'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC13'>		<span class="p">}</span></div><div class='line' id='LC14'><br/></div><div class='line' id='LC15'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">successCallback</span> <span class="o">!=</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC16'>			<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;PushNotification.register failure: success callback parameter must be a function&quot;</span><span class="p">);</span></div><div class='line' id='LC17'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC18'>		<span class="p">}</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'>		<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">successCallback</span><span class="p">,</span> <span class="nx">errorCallback</span><span class="p">,</span> <span class="s2">&quot;PushPlugin&quot;</span><span class="p">,</span> <span class="s2">&quot;register&quot;</span><span class="p">,</span> <span class="p">[</span><span class="nx">options</span><span class="p">]);</span></div><div class='line' id='LC21'>	<span class="p">};</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Call this to unregister for push notifications</span></div><div class='line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">PushNotification</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">unregister</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">successCallback</span><span class="p">,</span> <span class="nx">errorCallback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC25'>		<span class="k">if</span> <span class="p">(</span><span class="nx">errorCallback</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span> <span class="nx">errorCallback</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{}}</span></div><div class='line' id='LC26'><br/></div><div class='line' id='LC27'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">errorCallback</span> <span class="o">!=</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC28'>			<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;PushNotification.unregister failure: failure parameter not a function&quot;</span><span class="p">);</span></div><div class='line' id='LC29'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC30'>		<span class="p">}</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">successCallback</span> <span class="o">!=</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC33'>			<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;PushNotification.unregister failure: success callback parameter must be a function&quot;</span><span class="p">);</span></div><div class='line' id='LC34'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC35'>		<span class="p">}</span></div><div class='line' id='LC36'><br/></div><div class='line' id='LC37'>		<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">successCallback</span><span class="p">,</span> <span class="nx">errorCallback</span><span class="p">,</span> <span class="s2">&quot;PushPlugin&quot;</span><span class="p">,</span> <span class="s2">&quot;unregister&quot;</span><span class="p">,</span> <span class="p">[]);</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC39'>&nbsp;</div><div class='line' id='LC40'>&nbsp;</div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Call this to set the application icon badge</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">PushNotification</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">setApplicationIconBadgeNumber</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">successCallback</span><span class="p">,</span> <span class="nx">badge</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC43'>		<span class="k">if</span> <span class="p">(</span><span class="nx">errorCallback</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span> <span class="nx">errorCallback</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{}}</span></div><div class='line' id='LC44'><br/></div><div class='line' id='LC45'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">errorCallback</span> <span class="o">!=</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC46'>			<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;PushNotification.setApplicationIconBadgeNumber failure: failure parameter not a function&quot;</span><span class="p">);</span></div><div class='line' id='LC47'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC48'>		<span class="p">}</span></div><div class='line' id='LC49'><br/></div><div class='line' id='LC50'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">successCallback</span> <span class="o">!=</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC51'>			<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;PushNotification.setApplicationIconBadgeNumber failure: success callback parameter must be a function&quot;</span><span class="p">);</span></div><div class='line' id='LC52'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC53'>		<span class="p">}</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'>		<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">successCallback</span><span class="p">,</span> <span class="nx">successCallback</span><span class="p">,</span> <span class="s2">&quot;PushPlugin&quot;</span><span class="p">,</span> <span class="s2">&quot;setApplicationIconBadgeNumber&quot;</span><span class="p">,</span> <span class="p">[{</span><span class="nx">badge</span><span class="o">:</span> <span class="nx">badge</span><span class="p">}]);</span></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC57'><br/></div><div class='line' id='LC58'><span class="c1">//-------------------------------------------------------------------</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">plugins</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC61'>	<span class="nb">window</span><span class="p">.</span><span class="nx">plugins</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC62'><span class="p">}</span></div><div class='line' id='LC63'><span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">plugins</span><span class="p">.</span><span class="nx">pushNotification</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC64'>	<span class="nb">window</span><span class="p">.</span><span class="nx">plugins</span><span class="p">.</span><span class="nx">pushNotification</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">PushNotification</span><span class="p">();</span></div><div class='line' id='LC65'><span class="p">}</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1360648847" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.08802s from fe4.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/phonegap-build/PushPlugin/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.08874' data-host='fe4'></span>
    
  </body>
</html>

