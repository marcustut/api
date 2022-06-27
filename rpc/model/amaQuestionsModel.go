package model

import (
	"github.com/zeromicro/go-zero/core/stores/cache"
	"github.com/zeromicro/go-zero/core/stores/sqlx"
)

var _ AmaQuestionsModel = (*customAmaQuestionsModel)(nil)

type (
	// AmaQuestionsModel is an interface to be customized, add more methods here,
	// and implement the added methods in customAmaQuestionsModel.
	AmaQuestionsModel interface {
		amaQuestionsModel
	}

	customAmaQuestionsModel struct {
		*defaultAmaQuestionsModel
	}
)

// NewAmaQuestionsModel returns a model for the database table.
func NewAmaQuestionsModel(conn sqlx.SqlConn, c cache.CacheConf) AmaQuestionsModel {
	return &customAmaQuestionsModel{
		defaultAmaQuestionsModel: newAmaQuestionsModel(conn, c),
	}
}
